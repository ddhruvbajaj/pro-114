function preload(){

}
    

function setup(){
    canvas=createCanvas(500,460);
    canvas.center();
    video=createCapture(VIDEO);
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',getresults);
}


function draw(){
    
}

function snap_shot(){
    save('filtercolor.png');
}

function modelloaded(){
    console.log("Model loaded");
}

function getresults(result){
    if(result.length>0){
     console.log(result);
 console.log("x cordinate of nose="+result[0].pose.nose.x);   
 console.log("y cordinate of nose="+result[0].pose.nose.y);  
 noseX=result[0].pose.nose.x+40;
 noseY=result[0].pose.nose.y+10;
 }


}