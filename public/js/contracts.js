
$("li").on("click", function () {
    highlightTab($(this).attr("value"));
    switchTab($(this).attr("value"));
});


function highlightTab(value) {
    $("li").each(function (index) {
        if ($(this).attr("value") == value) {
            $(this).css("color", "#6287ff");
        }
        else {
            $(this).css("color", "#fff");
        }
    })
}

function switchTab(value) {
    $(".table-wrapper").each(function (index) {
        if ($(this).attr("value") == value) {
            $(this).css("display", "block");
        }
        else {
            $(this).css("display", "none");
        }
    })
}