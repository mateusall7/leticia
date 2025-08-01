self.onmessage = function(e) {
  function respond(s) { postMessage(s + "\n"); }
  if (e.data === "uci") {
    respond("Stockfish pronto");
  } else if (e.data.startsWith("go")) {
    respond("bestmove e2e4");
  }
};
