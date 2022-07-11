function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");

    ctxt.fillStyle="red";
    ctxt.fillRect(20,20,200,100);  /*x-axis to move left & right,y-axis to move up & down, width, Height */
    ctxt.strokeStyle="green";
    ctxt.strokeRect(20,20,200,100);   /*x-axis to move left & right,y-axis to move up & down, width, Height */

    ctxt.clearRect(30,30,180,80 );
}
window.addEventListener("load",logo,false);