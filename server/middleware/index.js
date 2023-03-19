const jwt = require("jsonwebtoken");

async function refreshAccessToken(req, res, refreshToken) {
  if (!refreshToken) {
    res.status("401").json({
      data: {
        error: "Unauthorized",
        status_code: "401",
        message: "You are not allowed, Please Login or create a account.",
      },
    });
    return;
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECREAT, (error, user) => {
    if (error) {
      res.status("401").json({
        data: {
          error: "Unauthorized",
          status_code: "401",
          message: "You are not allowed or your session has expired",
        },
      });
    }
    if (user) {
      res.clearCookie(`${user.id}`);
      req.cookies[`${user.id}`] = "";
    }

    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECREAT, {
      expiresIn: "60s",
    });
    res.cookie("OAuth_Token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60),
      sameSite: "none",
      secure: true,
    });
    req.id = user.id;
    req.token = token;
  });
}

async function verifyToken(req, res, next) {
  if (!req.headers.cookie) {
    res.status("401").json({
      data: {
        error: "Unauthorized",
        status_code: "401",
        message: "We are unable to recognize you",
      },
    });
    return;
  }
  let accessToken;
  let refreshToken;
  if (req.headers.cookie.split("=")[0] === "Refresh_Token") {
    refreshToken = req.headers.cookie
      .split("=")[1]
      .split(" ")[0]
      .replace(";", "");
  } else {
    accessToken = req.headers.cookie
      .split("=")[1]
      .split(" ")[0]
      .replace(";", "");
    refreshToken = req.headers.cookie.split("=")[2];
  }
  if (!accessToken && refreshToken) {
    refreshAccessToken(req, res, refreshToken);
    next();
  } else {
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECREAT, (error, user) => {
      if (error) {
        res.status("401").json({
          data: {
            error: "Unauthorized",
            status_code: "401",
            message: "You are not allowed or your session has expired",
          },
        });
      }
      req.id = user.id;
    });
    next();
  }
}
module.exports = {
  verifyToken,
};
