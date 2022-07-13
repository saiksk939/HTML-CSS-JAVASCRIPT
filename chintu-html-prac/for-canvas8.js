function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.fillStyle="red";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(1.5,1.5);
    ctxt.fillStyle="blue";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(1.5,1.5);
    ctxt.fillStyle="green";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(1.5,1.5);
    ctxt.fillStyle="aqua";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(1.5,1.5);
    ctxt.fillStyle="orange";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(1.5,1.5);
}    
window.addEventListener("load", logo, false);