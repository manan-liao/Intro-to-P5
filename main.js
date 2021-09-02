function preload(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(150,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,400);
    fill("coral");
    circle(50,50,40);
    fill("coral");
    circle(550,50,40);
    fill("coral")
    circle(550,350,40);
    fill("coral")
    circle(50,350,40);
    fill("coral")
    fill("lightblue")
    rect(70,40,460,20)
    fill("lightblue")
    rect(70,340,460,20)
    fill("lightblue")
    rect(40,70,20,260)
    fill("lightblue")
    rect(540,70,20,260)
}

function take_snapshot(){
    save("Manan.png");
}