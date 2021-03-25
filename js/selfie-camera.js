// var video = document.getElementById('selfie-camera');

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         video.srcObject = stream;
//         video.play();
//     });
// }

// // capture image
// var canvas = document.getElementById('captured-selfie');
// var context = canvas.getContext('2d');
// var video = document.getElementById('selfie-camera');

// // trigger
// document.getElementById("capture-btn").addEventListener("click", function() {
//     context.drawImage(video, 0, 0, 640, 480);
//     video.scale(1, 11);
// });

// video.addEventListener('loadedmetadata', function() {
//     context.translate(video.videoWidth, 0);
//     context.scale(-1, 1);
// });

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    // track.stop();
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);