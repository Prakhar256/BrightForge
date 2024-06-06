import { Server as SocketIOServer } from "socket.io";
import http from "http";

export const initSocketServer = (server: http.Server) => {
  const io = new SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Listen for 'notification' event from the frontend
    socket.on("notification", (data) => {
      // Broadcast the notification data to all connected clients (admin dashboard)
      io.emit("newNotification", data);
    });

    // When user is leaving the website
    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

// When the server receives a "notification" event from any client (probably a specific client that triggers notifications), it takes the data from that event and immediately broadcasts it to all connected clients as a "newNotification" event. This is useful for scenarios like an admin dashboard where you want to display real-time updates to all connected administrators.