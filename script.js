$(function() {
    console.log("DOM loaded – you can have fun");
});

var span = $("span");
span.each(function(index, element) {
    $("span:even").css("color", "red");
});

var paragraphs = $("p");


paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
    $(button).click(function() {
        alert($(this).attr("data-tmp"));
    });
});
//
// $("button").click(function() {
// 	alert($(this).attr("data-tmp"));
// });
