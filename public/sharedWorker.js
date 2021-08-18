onconnect = function(e) {
  const port = e.ports[0];

  port.onmessage = function(e) {
    data = e.data;
    port.postMessage(data)
  }
}