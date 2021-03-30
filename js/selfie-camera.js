var video = document.getElementById('selfie-camera');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

// capture image
var canvas = document.getElementById('captured-selfie');
var context = canvas.getContext('2d');
var video = document.getElementById('selfie-camera');

// trigger
document.getElementById("capture-btn").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
    video.scale(1, 11);
});

video.addEventListener('loadedmetadata', function() {
    context.translate(video.videoWidth, 0);
    context.scale(-1, 1);
});

// NEW CODE

// // Set constraints for the video stream
// var constraints = { video: { facingMode: "user" }, audio: false };
// var track = null;

// // Define constants
// const cameraView = document.querySelector("#camera--view"),
//     cameraOutput = document.querySelector("#camera--output"),
//     cameraSensor = document.querySelector("#camera--sensor"),
//     cameraTrigger = document.querySelector("#camera--trigger");

// // Access the device camera and stream to cameraView
// function cameraStart() {
//     navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then(function(stream) {
//             track = stream.getTracks()[0];
//             cameraView.srcObject = stream;
//         })
//         .catch(function(error) {
//             console.error("Oops. Something is broken.", error);
//         });
// }

// // Take a picture when cameraTrigger is tapped
// cameraTrigger.onclick = function() {
//     cameraSensor.width = cameraView.videoWidth;
//     cameraSensor.height = cameraView.videoHeight;
//     cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
//     cameraOutput.src = cameraSensor.toDataURL("image/webp");
//     cameraOutput.classList.add("taken");
//     // track.stop();
// };

// // Start the video stream when the window loads
// window.addEventListener("load", cameraStart, false);

// NEW CODE

// The buttons to start & stop stream and to capture the image
// var btnStart = document.getElementById("btn-start");
// var btnStop = document.getElementById("btn-stop");
// var btnCapture = document.getElementById("btn-capture");

// // The stream & capture
// var stream = document.getElementById("stream");
// var capture = document.getElementById("capture");
// var snapshot = document.getElementById("snapshot");

// // The video stream
// var cameraStream = null;

// // Attach listeners
// btnStart.addEventListener("click", startStreaming);
// btnStop.addEventListener("click", stopStreaming);
// btnCapture.addEventListener("click", captureSnapshot);

// // Start Streaming
// function startStreaming() {

//     var mediaSupport = 'mediaDevices' in navigator;

//     if (mediaSupport && null == cameraStream) {

//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function(mediaStream) {

//                 cameraStream = mediaStream;

//                 stream.srcObject = mediaStream;

//                 stream.play();
//             })
//             .catch(function(err) {

//                 console.log("Unable to access camera: " + err);
//             });
//     } else {

//         alert('Your browser does not support media devices.');

//         return;
//     }
// }

// // Stop Streaming
// function stopStreaming() {

//     if (null != cameraStream) {
//         var track = cameraStream.getTracks()[0];

//         track.stop();
//         stream.load();

//         cameraStream = null;
//     }
// }

// function captureSnapshot() {

//     if (null != cameraStream) {

//         var ctx = capture.getContext('2d');
//         var img = new Image();

//         ctx.drawImage(stream, 0, 0, capture.width, capture.height);
//         ctx.translate(video.videoWidth, 0);
//         ctx.scale(-1, 1);

//         img.src = capture.toDataURL("image/png");
//         img.width = '100%';

//         ctx.translate(video.videoWidth, 0);
//         ctx.scale(-1, 1);
//     }
// }

// $('#selfie-camera-modal').on('hide.bs.modal', function(event) {
//     if (null != cameraStream) {
//         var track = cameraStream.getTracks()[0];

//         track.stop();
//         stream.load();

//         cameraStream = null;
//     }
// })