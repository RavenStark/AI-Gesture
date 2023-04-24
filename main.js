noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;




function setup() {
canvas = createCanvas(600 , 500);
canvas.position(700 , 150);
video = createCapture(VIDEO);
video.size(500 , 500);
video.position(100 , 100)

poseNet = ml5.poseNet(video , modelLoaded);

poseNet.on('pose' , gotPoses);

}

function modelLoaded() {
    console.log('PoseNet Is Loaded');
}

function draw() {
background('gray');
fill('cyan');
stroke('cyan');
square(noseX , noseY , difference);
document.getElementById('square_side').innerHTML = "Area Of Square:  " + difference * difference + "sq.px";
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose X: " + noseX + "  Nose Y: " + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = Math.floor(rightWristX - leftWristX);
console.log(difference);



}

} 