function addHauler() {
    const ingame_name = $("#ingame-name").val();
    const username = $("#username").val();
    const password = $("#password").val();

    const data = { ingame_name, username, password };


    $.post("/haulers/add", data, function (response) {
        if (response.err) {
            alert("Error" + response.err);
        }
        else {
            location.reload();
        }
    })
}

function removeHauler(id) {
    const data = { id };
    $.post("/haulers/remove", data, response => {
        if (response.err) {
            alert("Error" + response.err);
        }
        else {
            location.reload();
        }
    });
}