function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.font="50px elephant";
    ctxt.fillStyle="red";
    ctxt.fillText("SAIKSK",150,200);  /* "saiksk",x-axis to move left & right,y-axis to move up & down */
    ctxt.strokeStyle="yellow";
    ctxt.strokeText("SAIKSK",150,200);   /* "saiksk",x-axis to move left & right,y-axis to move up & down */
}
window.addEventListener("load",logo,false);