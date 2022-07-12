function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.beginPath();
    ctxt.moveTo(300,80);  //x-axis value, y-axis value
    ctxt.lineTo(150,300);  //x-axis value, y-axis value
    ctxt.lineTo(50,300);
    ctxt.closePath();
    ctxt.stroke();


}
window.addEventListener("load",logo,false);