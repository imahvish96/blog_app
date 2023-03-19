const { Router } = require("express");
const { signup, login, logout, refreshSession } = require("../controller/auth.controller");
const { verifyToken } = require("../middleware");

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/refresh", verifyToken, refreshSession);

module.exports = authRouter;
