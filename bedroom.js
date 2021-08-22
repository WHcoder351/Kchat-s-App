img = "";
stats = "";
Re = [];
function preload(){
    img = loadImage("BedRoom.jpg");
}
function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    obd = ml5.objectDetector('cocossd', ml);
    document.getElementById("stats").innerHTML = "Status = ID-ing Object...";
}

function ml(){
    console.log("CoCoSSD model Loaded!");
    stats = true;
}

function gR(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        Re = results;
    }
}
function draw() {
    image(img,0,0,450,450);

    if (stats != "") {
    obd.detect(img, gR);
    for(i = 0; i<Re.length; i++){
        document.getElementById("stats").innerHTML = "Status = Object detected";
        document.getElementById("OBDs").innerHTML = "# of Objects detected: "+Re.length;
        percent = floor(Re[i].confidence * 100);
        fill("blue");
    text(Re[i].label + " " +percent + "%", Re[i].x +15, Re[i].y+15);
    noFill();
    stroke("black");
    rect(Re[i].x, Re[i].y, Re[i].width, Re[i].height);
    }
    }
}