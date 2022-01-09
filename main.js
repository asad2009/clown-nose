function preload(){
clown=loadImage('https://i.postimg.cc/9M3nmJpR/clown-nose-png-banner-free-zoya-nail-polish-11562929643cbk7y27xbe.png');
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
posenet=ml5.poseNet(video,modelLoded);
posenet.on('pose',gotPoses);

}
function draw(){
image(video,0,0,400,400);
image(clown,nosex,nosey,30,30);
}
function takesnapshot(){
    save('image.png')
}
function modelLoded(){
console.log("poseNet is started")
}
function gotPoses(results){
    if (results.length>0){
       console.log(results);
       nosex=results[0].pose.nose.x;
       nosey=results[0].pose.nose.y+10;
       console.log("nose x= "+results[0].pose.nose.x);
       console.log("nose y= "+results[0].pose.nose.y+10);
    }
}
var nosex=0;
nosey=0;
