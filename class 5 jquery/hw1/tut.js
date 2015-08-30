/**
 * Created by sboyapati on 8/15/15.
 */
var backgroundColor = $("#theElement").css('background-color');


$("#theElement").css('background-color', '#00ff00');

$("#theElement").css(
    {
        'background-color' : '#00ff00',
        'border'           : '1px solid #000000'
    }
);




$("#theElement").addClass('theClass');

$("#theElement").addClass('theClass class2 class3');

$("#theElement").toggleClass('theClass');

$("#theElement").toggleClass('theClass class2 class3');



var text = $('#theElement').text();

$('#theElement').text('New text for element.');


$("<li/>", {
    click: function(){},
    id: "test", // mix ids and jQuery methods
    addClass: "clickable"
});

$("<li><a></a></li>") // li
    .find("a") // a
    .attr("href", "http://ejohn.org/") // a
    .html("John Resig") // a
    .end() // li
    .appendTo("ul");



/*A document fragment is just a lightweight container that can hold some DOM nodes.
    It makes it easy to store the nodes for later all while improving the performance of insertion*/

var div = document.createElement("div");
div.innerHTML = "<li><a></a></li>";
var fragment = document.createDocumentFragment();
while ( div.firstChild ) {
    fragment.appendChild( div.firstChild );
}

/*
When you insert, or clone, a fragment all of its contents are automatically inserted or cloned.
    This ends up being really fast, avoid having to insert nodes one-by-one.
*/

someDiv.appendChild( fragment );


/*jQuery has an API for invisibly storing data on DOM nodes.
    You can add data to any element (using .data) and we'll store it in a central repository.*/

$("div").data("test", 5);
$("div").data("test") === 5;



// Get all event handlers bound to an element
$("div").data("events");