img = "";
objects = [];
status = "";

function preload(){

    img = loadImage("bottles.jpg");
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
        objects = results;
    }
}

function back(){

    window.location = "index.html";
}

function draw(){

      image(img, 0,0, 600,500);

      if(status != "" ){

        for( i = 0; i < objects.length; i++){

            document.getElementById("status").innerHTML = "STATUS : Objects Detected";
            document.getElementById("ans").innerHTML = "There are 5 big objects in the image from which COCOSSD model has detected  "+ objects.length+".";


            fill("  red");
            percent = Math.floor(objects[i].confidence  *100);
            console.log("yes");
            label = objects[i].label;
            text(label + " " +  percent + "%",  objects[i].x,  objects[i].y);
            noFill();
            stroke("red");  
            rect(objects[i].x,  objects[i].y, objects[i].width, objects[i].height);
                        

        }
      }
}

