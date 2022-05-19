
$('.mailCheckbox').change(function () {

    $.ajax({
        type: "GET",
        url: "/settings/toggle/mail",
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        error: function (data) {
            alert("Setting updated")
        }
    });
});

$('.discordCheckbox').change(function () {

    $.ajax({
        type: "GET",
        url: "/settings/toggle/discord",
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        error: function (data) {
            alert("Setting updated")
        }
    });
});
