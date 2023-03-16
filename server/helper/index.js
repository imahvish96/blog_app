function tokenNotFound() {
  console.log();
}

function verify(req, res, jwt) {
  if (!req.headers.cookie) {
    res.status("401").json({
      data: {
        label: "Verification",
        error: "Unauthorized",
        status_code: "401",
        message: "We are unable to recognize you",
      },
    });
    return;
  }
  console.log(req.headers.cookie);
  const authToken = req.headers.cookie.split("=")[1];
  if (!authToken) {
    res.status("401").json({
      data: {
        label: "Verification",
        error: "Unauthorized",
        status_code: "401",
        message: "You are not allowed, Please Login or create a account.",
      },
    });
  }
  jwt.verify(authToken, process.env.ACCESS_TOKEN_SECREAT, (error, user) => {
    if (error) {
      res.status("401").json({
        data: {
          label: "Verification",
          error: "Unauthorized",
          status_code: "401",
          message: "You are not allowed or your session has expired",
        },
      });
    }
    return user;
  });
}

module.exports = {
  verify,
};
