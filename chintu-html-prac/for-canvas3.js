function logo(){
    var ranto=document.getElementById("mycanvas");
    var ctxt=ranto.getContext("2d");
    var ranto2=ctxt.createLinearGradient(20,100,500,0);  /*x1,y1,x2,y2*/

    ranto2.addColorStop(.0,"red");  /*Size(value must be (0-1)), Color*/
    ranto2.addColorStop(.25,"black");
    ranto2.addColorStop(.45,"blue");
    ranto2.addColorStop(.55,"brown");
    ranto2.addColorStop(.75,"yellow");
    ranto2.addColorStop(.85,"green");
    ranto2.addColorStop(1,"pink");
    ctxt.font="50px elephant"
    ctxt.fillStyle=ranto2;
    ctxt.fillText("SAIKSK",150,200)

}
window.addEventListener("load",logo,false);