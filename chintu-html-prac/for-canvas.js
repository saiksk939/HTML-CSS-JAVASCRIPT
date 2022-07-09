function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.font="50px elephant";
    ctxt.fillStyle="red";
    ctxt.fillText("SAIKSK",150,200);  /* "saiksk", to move left & right, to move up & down */
    ctxt.strokeStyle="yellow";
    ctxt.strokeText("SAIKSK",150,200);   /* "saiksk", to move left & right, to move up & down */
}
window.addEventListener("load",logo,false);