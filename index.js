#!/usr/bin/env node

var colors = require('colors');
var ntpClient = require('ntp-client');

ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error("%s".red, err);
        process.exit(1)
        return;
    }
    console.log('  ____________________________________________________\n'.blue);
    console.log("  System time  : %s".blue, new Date());
    console.log("  Network time : %s".green, date);
    console.log('\n  ____________________________________________________'.blue);
    process.exit(0)
});
