function searchSystem() {
    $("#system-matches").html(""); // CLEAR DIV


    if ($("#system_name").val().length == 0) {
        $(".system-results-div").html("");
    }
    else {
        $(".system-results-div").html("<h3 class='matches-heading'>Matches</h3> <ul id='system-matches'></ul>");
        $.get("/system/search/" + $("#system_name").val().toString().toLowerCase(), (data) => {
            const response = data;
            response.forEach((system) => {
                $("#system-matches").append("<li onclick='addSystem(\"" + system.name + "\")' id='" + system.name + "'>" + system.name + " (" + system.security + ")" + "</li>");
            })
        });
    }


}

//event for pressing enter in search field
$('#system_name').on('keypress', function (e) {
    if (e.which === 13) {
        searchSystem();
    }
});

function addSystem(name) {
    if (confirm("Add " + name + " to the systems list?")) {
        $.post("/system/add/" + name, (data) => {
            //reload
            location.reload();

        });
    }
}