 nose_X=0;
 nose_Y=0;
 difference=0;
 leftWristX=0;
 rightWristX=0;
 
 
 function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    
    



    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPosses);
}

function gotPosses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("noseX =" + nose_X +" nose_y = " + nose_Y);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);


    }
}
function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML= "Width and Height of a square will be = "+ difference+"px";
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text("Virat",nose_X,nose_Y);

}

function modelLoaded() {
    console.log('poseNet Is  Initialized');
}


