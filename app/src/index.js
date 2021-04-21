

const $ = require('jquery');

var type = 1;

$("#test").click(function () {
    if (type == 1) {
        $("#test").html("2334");
        type = 2;
    }
    else if (type == 2) {
        $("#test").html("test");
        type = 1;
    }
});