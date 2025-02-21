import express from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});
export function getReciverSocketId(userId) {
  return userSocketMap[userId];
}
const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;
  io.emit("gtOnlineUsers", Object.keys(userSocketMap));
  socket.on("dissconect", () => {
    console.log("a user disconected", socket.id);
    delete userSocketMap[userId];
    io.emit("gtOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, io, server };
