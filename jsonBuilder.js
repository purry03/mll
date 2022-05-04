exports.buildJson = function (notificationType, issuerName, origin, destination, volume, status, validatedStatus, issuedDate, issuerId, discordRoleId){
  let notificationMessage = '**' + issuerName + '** has put up a new rush shipping contract, see below for details.'
  if (notificationType == 'reminderNotification') {
    notificationMessage = "**HELLO?!** There was a rush contract put up over 12 hours ago and it's still outstanding"
  }

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
                "description": `${notificationMessage}`,
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
                        "value": `${volume.toLocaleString("en-GB")} m3`,
                        "inline": true
                    },
                    {
                        "name": "Status",
                        "value": `${status}`,
                        "inline": true
                    },
                    {
                        "name": "Validated Status",
                        "value": `${validatedStatus}`,
                        "inline": true
                    },
                    {
                        "name": "Issued Date",
                        "value": `${issuedDate.toLocaleString('en-GB', {timeZone: 'UTC'})}`,
                        "inline": true
                    }
                ],
                "footer": {
                    "text": `${issuerName}`,
                    "url": `https://evewho.com/character/${issuerId}`,
                    "icon_url": `https://images.evetech.net/characters/${issuerId}/portrait`
                }
            }
        ]
    };


    return jsonData;
}
