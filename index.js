// const express = require('express')
// const WebSocket = require('ws');

// const socket = new WebSocket('ws://localhost:8787');

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
