var https = require('https');

module.exports = getHTML

function getHTML (options, callback) {

  var body = [];


  var log = https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data){
      body.push(data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      body = body.join("");
      callback(body);
    });

  });

}


