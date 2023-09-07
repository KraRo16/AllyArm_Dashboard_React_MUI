import { io } from "socket.io-client";

const socket = io("http://192.168.0.200:3001/", { transports: ["websocket"] });
let dataCallback = null;

export function sendMessage(changedValues) {
  socket.emit("response", changedValues);
  console.log("Send to server:", changedValues);
}

export function subscribeToMessages(callback) {
  dataCallback = callback;
  socket.on("data", dataCallback);
}

export function unsubscribeFromMessages() {
  if (dataCallback) {
    socket.off("data", dataCallback);
    dataCallback = null;
  }
}
