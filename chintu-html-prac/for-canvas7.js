function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.font="bold 50px elephant";
    ctxt.fontStyle="red";
    ctxt.fillText("SAIKSK",120,200);
    ctxt.rotate(Math.PI/14);   //radians
    ctxt.fillText("SAIKSK",120,200);
    ctxt.rotate(Math.PI/12);   //radians
    ctxt.fillText("SAIKSK",120,200);

}    
window.addEventListener("load", logo, false);