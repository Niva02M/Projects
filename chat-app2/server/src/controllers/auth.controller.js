import bcrypt from "bcryptjs";
import { cloudinary } from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import { User } from "../models/user.model.js";

//signup
export const signupController = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!email || !password || !fullname) {
      return res.status(400).json({
        message: "Please Fill all The Fields",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 Characters",
      });
    }
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        message: "User Already Exists!",
      });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      //generate jwt token
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        message: "new user created",
        success: true,
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        message: "Invalid User Data",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

//login
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    generateToken(user._id, res);
    // const token = generateToken(user._id, res);

    res.status(200).json({
      message: `welcome ${user.fullname}`,
      success: true,
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      profilePic: user.profilePic,
      //   token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
//logout
export const logoutController = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
//update profile
export const updateProfileContrller = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const UserID = req.user._id;

    if (!profilePic) {
      res.status(400).json({
        message: "Profile Pic Is Required",
      });
      const UploadResponse = await cloudinary.uploader.upload(profilePic);
      const UpdatedUser = await User.findByIdAndUpdate(
        UserID,
        { profilePic: UploadResponse.secure_url },
        { new: true }
      );
      res.status(200).json(UpdatedUser);
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const checkController = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
