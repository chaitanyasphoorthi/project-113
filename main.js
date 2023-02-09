function preload(){
}


function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video,40,40,560,400)
    fill("green");
    stroke("lightgreen");
    rect(60,20,540,40);
    rect(60,420,540,40);
    rect(20,50,40,440)
    rect(580,50,40,440)
    fill("red");
    stroke("orange");
    circle(40,40,80);
    circle(600,40,80);
    circle(40,440,80);
    circle(600,440,80);
    

    
}

function take_snapshot(){
   save('student_name.png')
}

