// const http = require("http");
// const WebSocketServer = require("websocket").server;

// let connection = null;

// const httpServer = http.createServer((req, res) => {
//   console.log("We have recieved a request.");
// })

// const webSocket = new WebSocketServer({
//   "httpServer": httpServer
// })

// httpServer.listen(8080, () => console.log("My server is listning on port number 8080."));

// webSocket.on("request", request => {

//   connection = request.accept(null, request.origin);
//   connection.on("open", () => console.log("Opened!!!"));
//   connection.on("close", () => console.log("CLOSED!!!"));
//   connection.on("message", message => {

//     console.log(`Recieved message ${message.utf8Data}`);
//     connection.send(`Got your message: ${message.utf8Data}`);
//   })
// })

const http = require("http");
const WebSocketServer = require("websocket").server
let connection = null;

const httpserver = http.createServer((req, res) =>
  console.log("we have received a request"))

const websocket = new WebSocketServer({
  "httpServer": httpserver
})

httpserver.listen(8080, () => console.log("My server is listening on port 8080"))

websocket.on("request", request => {

  connection = request.accept(null, request.origin)
  connection.on("open", () => console.log("Opened!!!"))
  connection.on("close", () => console.log("CLOSED!!!"))
  connection.on("message", message => {

    console.log(`Received message ${message.utf8Data}`)
    // connection.send(`got your message: ${message.utf8Data}`)
  })
})
