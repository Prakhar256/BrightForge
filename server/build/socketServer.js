"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocketServer = void 0;
const socket_io_1 = require("socket.io");
const initSocketServer = (server) => {
    const io = new socket_io_1.Server(server);
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
exports.initSocketServer = initSocketServer;
// When the server receives a "notification" event from any client (probably a specific client that triggers notifications), it takes the data from that event and immediately broadcasts it to all connected clients as a "newNotification" event. This is useful for scenarios like an admin dashboard where you want to display real-time updates to all connected administrators.
