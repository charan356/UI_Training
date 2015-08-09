/**
 * Created by sboyapati on 8/8/15.
// */
//window.addEventListener( 'load', function(){
//    alert( 'All files for this webpage has been successfully loaded.' );
//}, false );
//
//
//
//
//window.addEventListener( 'beforeunload', function( event ){
//    alert( 'All files for this webpage are about to be unloaded.' );
//}, false );
//
//window.addEventListener( 'unload', function( event ){
//    alert( 'All files for this webpage has been successfully unloaded.' );
//}, false );
//
//
//
//

//
//
//window.addEventListener( 'resize', function( event ){
//    alert( 'The window has been resized!' );
//}, false );
//
//
//
//
//window.addEventListener( 'click', function(){
//    alert( 'Client X: ' + event.clientX + ' Client Y: ' + event.clientY );
//} );










//
//var button = document.querySelector("button");
//button.addEventListener("click", function() {
//    //http call
//
//
//});
//

//var button = document.querySelector("button");
//
//button.addEventListener("mousedown", function(event) {
//    if (event.which == 1)
//        console.log("Left button");
//    else if (event.which == 2)
//        console.log("Middle button");
//    else if (event.which == 3)
//        console.log("Right button");
//});
//
//
//addEventListener("keydown", function(event) {
//    if (event.keyCode == 86)
//        document.body.style.background = "violet";
//});
//addEventListener("keyup", function(event) {
//    if (event.keyCode == 86)
//        document.body.style.background = "";
//});
//





//addEventListener("click", function(event) {
//    var dot = document.createElement("div");
//    dot.className = "dot";
//    dot.style.left = (event.pageX - 4) + "px";
//    dot.style.top = (event.pageY - 4) + "px";
//    document.body.appendChild(dot);
//});


//
//var para = document.querySelector("p");
//function isInside(node, target) {
//    for (; node != null; node = node.parentNode)
//        if (node == target) return true;
//}
//para.addEventListener("mouseover", function(event) {
//    if (!isInside(event.relatedTarget, para))
//        para.style.color = "red";
//});
//para.addEventListener("mouseout", function(event) {
//    if (!isInside(event.relatedTarget, para))
//        para.style.color = "";
//});




var help = document.querySelector("#help");
var fields = document.querySelectorAll("input");

for (var i = 0; i < fields.length; i++) {

    fields[i].addEventListener("focus", function(event) {
        var text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    fields[i].addEventListener("blur", function(event) {
        help.textContent = "";
    });


}



//var form = document.querySelector("form");
//form.addEventListener("submit", function(event) {
//    console.log("Saving value", form.elements.value.value);
//    event.preventDefault();
//});