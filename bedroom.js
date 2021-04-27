img = "";

function preload(){

    img = loadImage("bedroom.jpg");
}

function setup(){

    canvas = createCanvas(600, 500);
    canvas.center();

    detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Detecting Objects";
}

function modelLoaded(){

    console.log("Model Loaded !");
    status = true;
    detector.detect(img,gotresults);
}

function gotresults(error, results){

    if(error){

        console.error(error);
    }

    else{

        console.log(results);
    }
}

function back(){

    window.location = "index.html";
}

function draw(){

      image(img, 0,0, 600,500);
}

