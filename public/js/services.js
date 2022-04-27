getServices();

function getServices() {
    $.ajax({
        type: "GET",
        url: "/services",
        cache: false,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data);
            data.forEach((service) => {
                let divToUpdate = "";
                if (service.name.toLowerCase() == "freighter") {
                    divToUpdate = ".freighter"
                }
                else if (service.name.toLowerCase() == "deep space transport") {
                    divToUpdate = ".dst"
                }
                else if (service.name.toLowerCase() == "blockade runner") {
                    divToUpdate = ".br"
                }
                $(divToUpdate + " .highsec-price").val(service.highsecPrice);
                $(divToUpdate + " .lowsec-price").val(service.lowsecPrice);
                $(divToUpdate + " .nullsec-price").val(service.nullsecPrice);
                $(divToUpdate + " .runs-highsec").prop('checked', service.runsIn.highsec);
                $(divToUpdate + " .runs-lowsec").prop('checked', service.runsIn.lowsec);
                $(divToUpdate + " .runs-nullsec").prop('checked', service.runsIn.nullsec);
                $(divToUpdate + " .max-volume").val(service.maxVolume);
                $(divToUpdate + " .max-collateral").val(service.maxCollateral);
                $(divToUpdate + " .rush-multiplier").val(service.rushMultiplier);
                $(divToUpdate + " .min-rush").val(service.minRushPrice);
                $(divToUpdate + " .is-rush").prop('checked', service.isRush);
            });
        }
    });
}

function updateServices() {
    var toSend = {
        "services": [
            {
                name: "Freighter",
                highsecPrice: 0,
                lowsecPrice: 0,
                nullsecPrice: 0,
                runsInHighsec: false,
                runsInLowsec: false,
                runsInNullsec: false,
                maxVolume: 0,
                maxCollateral: 0,
                isRush: false,
                rushMultiplier: 0,
                minRushPrice: 0
            }, {
                name: "Deep Space Transport",
                highsecPrice: 0,
                lowsecPrice: 0,
                nullsecPrice: 0,
                runsInHighsec: false,
                runsInLowsec: false,
                runsInNullsec: false,
                maxVolume: 0,
                maxCollateral: 0,
                isRush: false,
                rushMultiplier: 0,
                minRushPrice: 0
            }, {
                name: "Blockade Runner",
                highsecPrice: 0,
                lowsecPrice: 0,
                nullsecPrice: 0,
                runsInHighsec: false,
                runsInLowsec: false,
                runsInNullsec: false,
                maxVolume: 0,
                maxCollateral: 0,
                isRush: false,
                rushMultiplier: 0,
                minRushPrice: 0
            }
        ]
    }

    const divs = [".freighter", ".dst", ".br"];

    let i = 0;
    divs.forEach(div => {
        toSend.services[i].highsecPrice = parseInt($(div + " .highsec-price").val());
        toSend.services[i].lowsecPrice = parseInt($(div + " .lowsec-price").val());
        toSend.services[i].nullsecPrice = parseInt($(div + " .nullsec-price").val());
        toSend.services[i].runsInHighsec = $(div + " .runs-highsec").is(':checked');
        toSend.services[i].runsInLowsec = $(div + " .runs-lowsec").is(':checked');
        toSend.services[i].runsInNullsec = $(div + " .runs-nullsec").is(':checked');
        toSend.services[i].maxVolume = parseInt($(div + " .max-volume").val());
        toSend.services[i].maxCollateral = parseInt($(div + " .max-collateral").val());
        toSend.services[i].rushMultiplier = parseFloat($(div + " .rush-multiplier").val());
        toSend.services[i].minRushPrice = parseInt($(div + " .min-rush").val());
        toSend.services[i].isRush = $(div + " .is-rush").is(':checked');

        i += 1;
    });

    $.post("/services/update", toSend, (data) => {

        if (data == "OK") {
            alert("Services Updated");
        }
        else {
            alert("An Error Occured");
            console.error(data);
        }

    });

}