let path = require('path')
global.rootPath = path.normalize(path.join(__dirname, '..', '..'))

module.exports = {
    // url and port of your IRI node
    iota_node_url: 'http://iota:14265',

    // address and port where the exporter will be bound
    bind_address: '0.0.0.0',
    bind_port: 9311,

    // address where zmq is being served (example: '127.0.0.1:5556')
    // *** Leave blank if ZMQ is not enabled on IRI ***
    zmq_url: 'iota:5566',

    // if true, will pull in market info (IOT to USD, IOT to BTC, etc)
    // *** Leave blank if you do not want market into pulled in ***
    market_info_flag: 'true',

    // window for bucketing confirmation times by transaction
    // represents seconds and aggregates a histogram
    confirm_time_buckets: [300, 600, 1200, 2400, 3600, 7200, 21600, 43200],

    // how often the prune schedule will run (leave at default unless you have
    // a good reason)
    prune_interval_days: 1,

    // number of days to keep confirmation stats
    // db does not grow that quickly but checking the db/ folder
    // size regularly will prevent any issues
    // **Comment out to remove pruning**
    retention_days: 14
}
