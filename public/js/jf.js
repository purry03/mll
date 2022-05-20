function addJFRoute() {
    const routeType = $(".add-routes-wrapper #route-type").val();
    const startSystem = $(".add-routes-wrapper #start-system").val();
    const destinationSystem = $(".add-routes-wrapper #destination-system").val();
    const minReward = $(".add-routes-wrapper #min-reward").val();
    const maxJFVolume = $(".add-routes-wrapper #max-JFvolume").val();
    const maxJFCollateral = $(".add-routes-wrapper #max-JFcollateral").val();
    const flatPrice = $(".add-routes-wrapper #JFFlatprice").val();
    const price = $(".add-routes-wrapper #JFprice").val();
    const rushShippingCharge = $(".add-routes-wrapper #rush-shipping-charge").val();
    const collateralMultiplier = $(".add-routes-wrapper #collateral-multiplier").val();
    const isFlat = $(".add-routes-wrapper #flat-rate").is(':checked');
    const isRush = $(".add-routes-wrapper #rush-shipping").is(':checked');

    const data = { routeType, startSystem, destinationSystem, minReward, maxJFVolume, maxJFCollateral, flatPrice, price, rushShippingCharge, collateralMultiplier, isFlat, isRush };


    $.ajax({
        type: "POST",
        url: "/routes/add",
        data: data,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        error: function (response) {
            if (response.err) {
                alert("Error" + response.err);
            }
            else {
                location.reload();
            }
        }

    });

}

function removeRoute(id) {
    const data = { id };

    $.ajax({
        type: "POST",
        url: "/routes/remove",
        data: data,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        error: function (response) {
            if (response.err) {
                alert("Error" + response.err);
            }
            else {
                location.reload();
            }
        }

    });

}

function toggleRush(id) {
    const data = { id };

    $.ajax({
        type: "POST",
        url: "/routes/toggleRush",
        data: data,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        error: function (response) {
            console.log("mao");
            location.reload();
        },
    });

}


function loadRoute() {
    const id = $("#route-edit-select").val();

    $.ajax({
        type: "POST",
        url: "/routes/get",
        data: { id },
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if (response.err) {
                alert("Error" + response.err);
            }
            else {
                $(".edit-route-wrapper #route-type").val(response[0].routeType);
                $(".edit-route-wrapper #start-system").val(response[0].start);
                $(".edit-route-wrapper #destination-system").val(response[0].destination);
                $(".edit-route-wrapper #max-JFvolume").val(response[0].maxVolume);
                $(".edit-route-wrapper #min-reward").val(response[0].minReward);
                $(".edit-route-wrapper #max-JFcollateral").val(response[0].maxCollateral);
                $(".edit-route-wrapper #JFFlatprice").val(response[0].flatPrice);
                $(".edit-route-wrapper #JFprice").val(response[0].price);
                $(".edit-route-wrapper #rush-shipping-charge").val(response[0].rushShippingCharge);
                $(".edit-route-wrapper #collateral-multiplier").val(response[0].collateralMultiplier);
                $(".edit-route-wrapper #flat-rate").prop('checked', response[0].isFlat);
                $(".edit-route-wrapper #rush-shipping").prop('checked', response[0].isRush);

            }
        }

    });

}


function editJFRoute() {
    const id = $("#route-edit-select").val();
    const routeType = $(".edit-route-wrapper #route-type").val();
    const startSystem = $(".edit-route-wrapper #start-system").val();
    const destinationSystem = $(".edit-route-wrapper #destination-system").val();
    const minReward = $(".edit-route-wrapper #min-reward").val();
    const maxJFVolume = $(".edit-route-wrapper #max-JFvolume").val();
    const maxJFCollateral = $(".edit-route-wrapper #max-JFcollateral").val();
    const flatPrice = $(".edit-route-wrapper #JFFlatprice").val();
    const price = $(".edit-route-wrapper #JFprice").val();
    const rushShippingCharge = $(".edit-route-wrapper #rush-shipping-charge").val();
    const collateralMultiplier = $(".edit-route-wrapper #collateral-multiplier").val();
    const isFlat = $(".edit-route-wrapper #flat-rate").is(':checked');
    const isRush = $(".edit-route-wrapper #rush-shipping").is(':checked');

    const data = { id, routeType, startSystem, destinationSystem, minReward, maxJFVolume, maxJFCollateral, flatPrice, price, rushShippingCharge, collateralMultiplier, isFlat, isRush };

    $.ajax({
        type: "POST",
        url: "/routes/edit",
        data: data,
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            if (response.err) {
                alert("Error" + response.err);
            }
            else {
                location.reload();
            }
        }

    });

}
