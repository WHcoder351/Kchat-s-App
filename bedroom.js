img = "";
stats = "";
function preload(){
    img = loadImage("BedRoom.jpg");
}
function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    obd = ml5.objectDetector('cocossd', ml);
    document.getAnimations("stats").innerHTML = "Status = ID-ing Object...";
}

function ml(){
    console.log("CoCoSSD model Loaded!");
    stats = true;
    obd.detect(img, gR);
}

function gR(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}
function draw() {
    
}