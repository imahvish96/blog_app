const jwt = require("jsonwebtoken");

async function verifyUser(req, res, next) {
  if (!req.headers.cookie) {
    res.status("404").json({ msg: "Server Error" });
    return;
  }
  const authToken = req.headers.cookie.split("=")[1];
  if (!authToken) {
    res.status("404").json({ msg: "No token found" });
  }
  jwt.verify(authToken, process.env.TOKEN_SECREAT, (error, user) => {
    console.log("VERIFY", user);
    if (error) {
      console.log("ERROR ==>", error);
      res.status("404").json({ msg: "Invalid token" });
    }
    req.id = user.id;
  });
  next();
}

async function refreshToken(req, res, next) {
  const authToken = req.headers.cookie.split("=")[1];
  if (!authToken) {
    res.status("404").json({ msg: "No token found" });
  }
  jwt.verify(authToken, process.env.TOKEN_SECREAT, (error, user) => {
    console.log("REFRESH", user);
    if (error) {
      console.log("ERROR ==>", error);
      res.status("403").json({ msg: "Invalid token" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";

    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECREAT, {
      expiresIn: "30m",
    });
    res.cookie("Refresh_Token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 30 * 60),
      sameSite: "none",
      secure: true,
    });
    req.id = user.id;
    next();
  });
}

module.exports = {
  verifyUser,
  refreshToken,
};
