var client, mysql, settings;


client = null;

mysql = require('mysql');

exports.getDbCon = function() {
    var err;
    try {
        if (client) {

            client = mysql.createConnection({
                host: '10.143.97.75',
                user: 'dand',
                password: '',
                port: 3306,
                database: 'spyder'
            });
            client.connect();
        } else {
            client = new mysql.createConnection({
                host: '10.143.97.75',
                user: 'dand',
                password: '',
                port: 3306,
                database: 'spyder'
            });
            client.connect();
        }
    } catch (_error) {
        client = new mysql.createConnection({
            host: '10.143.97.75',
            user: 'dand',
            password: '',
            port: 3306,
            database: 'spyder'
        });
        client.connect()
        err = _error;
        console.log(err);
    }
    return client;
};