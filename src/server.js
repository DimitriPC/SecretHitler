import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(); 
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // React dev server
    methods: ["GET", "POST"],
  },
});

let users = [];
let gamecodes = [];

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("waiting", (username) => {
    users.push(username);
    console.log(users);
    io.emit("waiting", users);
  })

  socket.on("gamecode", (gamecode) => {
    gamecodes.push(gamecode);
  })

  socket.on("message", (msg) => {
    console.log("Message from client:", msg);
    socket.emit("message", `Server got: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});


httpServer.listen(3000, () => {
  console.log("🚀 Socket.IO server running on http://localhost:3000");
});
