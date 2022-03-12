// const express = require('express')
// const WebSocket = require('ws');
//const websocket = new WebSocket('ws://localhost:8787');



// import WebSocket from 'ws';
// const ws = new WebSocket('ws://www.host.com/path');

// ws.on('open', function open(){
//   ws.send('something');
// });

// ws.on('message', function message(data){
//   console.log('received: %s', data);
// });



addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello Airbenders!', {
    headers: { 'content-type': 'text/plain' },
  })
}

// export default {
//   async fetch(request) {
//     const res = await fetch("https://echo.websocket.org", {
//       headers: { Upgrade: "websocket" },
//     });

//     const webSocket = res.webSocket;
//     webSocket.accept();
//     webSocket.addEventListener("message", (event) => {
//       console.log(event.data);
//     });

//     webSocket.send("Hello!"); // Above listener logs "Hello!"

//     return new Response();
//   },
// };