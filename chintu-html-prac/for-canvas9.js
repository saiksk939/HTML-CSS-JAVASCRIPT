function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");
    var ranto2=ctxt.createRadialGradient(150,150,10,150,150,150);  /*x0,y1,r0,x2,y2,r2*/

    ranto2.addColorStop(.0,"red");  /*Size(value must be (0-1)), Color*/
    ranto2.addColorStop(.25,"black");
    ranto2.addColorStop(.45,"blue");
    ranto2.addColorStop(.55,"brown");
    ranto2.addColorStop(.75,"yellow");
    ranto2.addColorStop(.85,"green");
    ranto2.addColorStop(1,"pink");
    ranto2.addColorStop(1,"orange");
    ctxt.fillStyle=ranto2;
    ctxt.fillRect(10,10,300,300);

}
window.addEventListener("load",logo,false);