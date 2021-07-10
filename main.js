viY= 0;
viX=0;
function preload(){
  clown=loadImage('https://i.postimg.cc/WbTkgjb4/mustache.png')
}
function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(300,300);
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotposes);
}
function gotposes(results){
  if(results.length > 0){
    console.log("Results");
    viX=results[0].pose.vi.x+20;
    viY=results[0].pose.vi.y-1;
    console.log("Munchi X ="+viX);
    console.log("Munchi Y ="+viY);
  }

}
function modelLoaded(){
  console.log("Posenet is initialized");
}
function draw(){
  image(video,0,0,500,600);
  image(clown,viX,viY,60,40); 
}
function takeSnapshot(){
  save('munchi.png');
}