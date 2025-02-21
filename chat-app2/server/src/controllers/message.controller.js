import { cloudinary } from "../lib/cloudinary.js";
import { getReciverSocketId, io } from "../lib/socket.js";
import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    console.log(filteredUsers);
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Errror",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id } = req.query;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        {
          senderId: myId,
          receiverId: id,
        },
        { senderId: id, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Errror",
    });
  }
};
export const sendMessages = async (req, res) => {
  try {
    const { id } = req.query;
    const { text, image } = req.body;
    const myId = req.user._id;

    console.log("body", req.body);
    console.log("Text:", text);
    let imageUrl;
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image);
      imageUrl = uploadRes.secure_url;
    }
    const newMessage = new Message({
      receiverId: id,
      senderId: myId,
      text,
      image: imageUrl,
    });
    await newMessage.save();

    const receiverSocketId = getReciverSocketId(receiverId);
    io.to(receiverSocketId).emit("newMessage", newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Errror",
    });
  }
};
