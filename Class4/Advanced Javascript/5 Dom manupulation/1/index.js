/*
function myFunction() {
    document.getElementById("demo").innerHTML =
        "Cookies associated with this document: " + document.cookie;

    document.getElementById("demo").innerHTML = document.domain;

    document.getElementById("demo").innerHTML = document.referrer;
}
*/


//function myFunction() {
//    document.open("text/html","replace");
//    document.write("<h2>Learning about the HTML DOM is fun!</h2>");
//    document.close();
//}


function myFunction() {

    //tocount number of links
  /*  document.getElementById("demo").innerHTML =
        "Number of links: " + document.links.length;*/

    document.getElementById("demo").innerHTML =
        document.anchors[0].innerHTML;
}