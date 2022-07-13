function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.fillStyle="red";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(3,3);
    ctxt.fillStyle="blue";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(3,3);
    ctxt.fillStyle="green";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(3,3);
    ctxt.fillStyle="aqua";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(3,3);
    ctxt.fillStyle="orange";
    ctxt.fillRect(10,10,25,15);
    ctxt.scale(3,3);
}    
window.addEventListener("load", logo, false);