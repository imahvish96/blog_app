const { Router } = require("express");
const { signup, login, logout } = require("../controller/auth.controller");
const { verifyUser } = require("../middleware");

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);

module.exports = authRouter;
