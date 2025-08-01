// Encapsula o Stockfish em um Web Worker
let engine = null;

if (typeof importScripts === "function") {
  // Estamos em um Web Worker
  importScripts("https://cdn.jsdelivr.net/npm/stockfish@11.0.0/src/stockfish.js");

  engine = STOCKFISH();

  onmessage = function (event) {
    engine.onmessage = function (e) {
      postMessage({ data: e });
    };
    engine.postMessage(event.data);
  };
}
