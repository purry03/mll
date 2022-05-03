exports.buildJson = function (issuerName, origin, destination, volume, status, issuedDate, issuerId, discordRoleId){
    let jsonData = {
        "username": "MLL Rush Shipping Notification",
        "avatar_url": "https://multi-lemm-logistics.com/img/logo.png",
        "content": `<@&${discordRoleId}>`,
        "embeds": [
            {
                "author": {
                    "name": "MLL Rush Shipment Bot",
                    "url": "http://multi-lemm-logistics.com",
                    "icon_url": "https://multi-lemm-logistics.com/img/logo.png"
                },
                "title": "MLL Rush Shipment Notification",
                "url": "http://multi-lemm-logistics.com/contracts",
                "description": `${issuerName} has put up a new rush shipping contract, see below for details.`,
                "color": 16757309,
                "fields": [
                    {
                        "name": "Origin",
                        "value": `${origin}`,
                        "inline": true
                    },
                    {
                        "name": "Destination",
                        "value": `${destination}`,
                        "inline": true
                    },
                    {
                        "name": "Volume",
                        "value": `${volume} m3`,
                        "inline": true
                    },
                    {
                        "name": "Status",
                        "value": `${status}`,
                        "inline": true
                    },
                    {
                        "name": "Issued Date",
                        "value": `${issuedDate}`,
                        "inline": true
                    }
                ],
                "footer": {
                    "text": "$ISSUER_NAME",
                    "url": `https://evewho.com/character/${issuerId}`,
                    "icon_url": `https://images.evetech.net/characters/${issuerId}/portrait`
                }
            }
        ]
    };

    return jsonData;
}