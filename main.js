noseX=0; 
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function modelLoaded() {
    console.log('poseNet Is Initialized')
}

function gotPoses(results) 
{ if(results.length > 0) 
    
    { console.log(results); noseX = results[0].pose.nose.x-15; 
        noseY = results[0].pose.nose.y-15; } 
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}