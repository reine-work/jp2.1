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
});

video.addEventListener('loadedmetadata', function() {
    context.translate(video.videoWidth, 0);
    context.scale(-1, 1);
});