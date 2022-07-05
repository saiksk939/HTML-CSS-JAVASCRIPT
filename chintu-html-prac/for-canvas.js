function logo(){
    var corn=document.getElementById("mycanvas");
    var ctxt=corn.getContext("2d");

    ctxt.font="50px elephant";
    ctxt.fillStyle="red";
    ctxt.fillText("SAIKSK",150,200);
    ctxt.strokeStyle="yellow";
    ctxt.strokeText("SAIKSK",150,200);

}
window.addEventListener("load",logo,false);