noseX=0;
noseY=0;
function preload(){
clown=loadImage("https://i.postimg.cc/NMygTkQw/download.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide(); 

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('Pose Net Is Initilized');
}

function draw(){
image(Video, 0, 0, 300, 300);
image(clown, noseX, noseY, 100, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
   }

   function gotPoses(results)
   {
    if(results.length > 0);
    console.log(results)
    noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x ="+ results[0].pose.nose.x);
console.log("nose y = "+ results[0].pose.nose.y);
   }
