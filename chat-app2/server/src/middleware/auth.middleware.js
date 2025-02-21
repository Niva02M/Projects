import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const ProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(400).json({
        message: "UnAuthorized-no Token Found",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(400).json({
        message: "UnAuthorized- Invalid Token",
      });
    }

    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Errorssss",
    });
  }
};
