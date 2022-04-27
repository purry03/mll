const fs = require("fs");
const systemsData = JSON.parse(fs.readFileSync(__dirname + "/data/systems.json"));


module.exports.getSystemName = id => {
    return new Promise((resolve, reject) => {
        systemsData.forEach(system => {
            if (system.solarSystemID.toString() == id) {
                resolve(system.solarSystemName.toString());
            }
        });
    });
}

module.exports.getSystemDetailsFromName = name => {
    return new Promise((resolve, reject) => {
        systemsData.forEach(system => {
            if (system.solarSystemName.toString().toLowerCase() == name.toLowerCase()) {
                resolve({ name, id: system.solarSystemID.toString(), security: system.security.toString() });
            }
        });
    });

}


module.exports.getSystemSecurityFromID = id => {
    return new Promise((resolve, reject) => {
        systemsData.forEach(system => {
            if (system.solarSystemID.toString() == id) {
                resolve(system.security.toString());
            }
        });
    });
}