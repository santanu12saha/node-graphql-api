const { MongoClient } = require('mongodb');
const assert = require('assert');
const { nodeEnv } = require('../lib/util');
const mongoConfig = require('../config/mongo')[nodeEnv];

const client = new MongoClient(mongoConfig.url, {
    useUnifiedTopology: true
})

client.connect((err) => {

    assert.equal(null, err);

    var db = client.db(mongoConfig.database);

    db.collection('users').insertMany([
        {
            userId: 1,
            contestsCount: 3,
            namesCount: 0,
            votesCount: 4
        },
        {
            userId: 2,
            contestsCount: 0,
            namesCount: 4,
            votesCount: 4
        }
    ]).then(response => {
        console.log(response);
        client.close();
    });

});