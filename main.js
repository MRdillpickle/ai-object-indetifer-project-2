status = "";
video = "";

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
}

function start() {
    objectDector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: decting objects";
}

function modelLoaded() {
    console.log("Model loaded");
}

function preload() {
    video = createCapture(480,380);
    video.hide()
}

function draw() {
    image(video, 0,0,480,380);
}