onload = () =>{
    document.body.classList.remove("container");
};
// Solicitar acceso al micrófono y la cámara
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(function (stream) {
    // Acceso concedido: mostrar el video en un elemento <video>
    var video = document.createElement('video');
    video.srcObject = stream;
    video.play();
    document.body.appendChild(video);
    
    // Aquí se podrían procesar los datos del stream para hacer grabación o monitoreo
    console.log("Acceso a la cámara y al micrófono concedido.");
  })
  .catch(function (error) {
    // Acceso denegado o error
    console.error("No se pudo acceder a la cámara/micrófono:", error);
  });