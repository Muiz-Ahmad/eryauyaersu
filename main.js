noseX=0
noseY=0
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
video=createCapture(VIDEO)
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose', gotPoses);
}

function draw()
{
    background('grey');

    document.getElementById("square_size").innerHTML = "Font Size = " + difference +"px"
    textSize(difference);
    fill('#FFE787');
    text('Muiz', 50, 400);

}

function modelLoaded()
{
    console.log("posenet is initalised")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}