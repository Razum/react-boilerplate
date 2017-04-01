var jsdom = require('jsdom');

require('babel-register')({
    presets: [ 'es2015' ]
});

const noop = () => {};

require.extensions['.scss'] = noop;

global.document = jsdom.jsdom('<!DOCTYPE html> <html lang="en"> <body><div id="root"></div></body> </html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};


