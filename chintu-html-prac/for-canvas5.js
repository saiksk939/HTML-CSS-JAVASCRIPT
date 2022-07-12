function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.shadowOffsetX=10;   //x-axis shadow moves left to right
    ctxt.shadowOffsetY=8;   //y-axis shadow moves up to down
    ctxt.shadowBlur=5;
    ctxt.shadowColor="green";
    ctxt.font="60px elephant";
    ctxt.fillStyle="red";
    ctxt.fillText("SAIKSK", 30,80);
    ctxt.fillRect(30,150,200,100);
}    
window.addEventListener("load", logo, false);