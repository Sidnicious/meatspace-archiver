#!/usr/bin/env node
'use strict';

var socket = require( 'socket.io-client' );

var URL = (process.argv[3] || 'https') + '://' + process.argv[2] + '.meatspac.es/';

var c = socket.connect( URL ).on( 'connect', function() {

	c.on( 'message', function(message) {
		process.stdout.write(JSON.stringify(message));
		process.stdout.write('\n');
	});

});
