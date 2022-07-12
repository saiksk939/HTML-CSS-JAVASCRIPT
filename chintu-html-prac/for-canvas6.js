function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.beginPath();
    ctxt.arc(200,150,100,0,2*Math.PI);  //x-axis, y-axis, radius, start angle, end angle
    ctxt.fillStyle="red";
    ctxt.fill();
}
window.addEventListener("load", logo, false);
