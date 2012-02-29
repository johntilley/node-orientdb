var Db = require('../lib/orientdb').Db,
    Server = require('../lib/orientdb').Server;


var dbConfig = {
    user_name: "admin",
    user_password: "admin",
};
var serverConfig = {
    host: 'localhost',
    port: 2424,
    user_name: "root",
    user_password: "83CACE21A23DB46F93BFD58A3CE48C8D29926C6EF424D7DA9BD725AE070CCDC0"
};

var server = new Server(serverConfig);
var db = new Db('temp', server, dbConfig);


db.open(function(err, result) {

    if (err) { console.log(err); return; }

    db.size(function(err, size) {

        if (err) { console.log(err); return; }

        if (typeof size !== 'number') {
            throw new Error("The result must be a boolean value. Received: " + (typeof size));
        }

        console.log("Database size: " + size);

        db.close(function(err) {
    
            if (err) { console.log(err); return; }
        });
    });
});
