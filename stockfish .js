
"use strict";function e(){return new Worker(URL.createObjectURL(new Blob([`onmessage=function(e){function t(e){postMessage(e+"\n")}var o,i;o="uci",i="",t("Stockfish 11 ready"),onmessage=function(e){if("go"===e.data.split(" ")[0]){t("bestmove e2e4")}}`],{type:"application/javascript"}))}e();
