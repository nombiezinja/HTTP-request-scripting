function getAndPrintHTML (obj) {

    var https = require('https');


  var output = https.get("https://" + requestOptions.host + requestOptions.path, function(response) {

    response.setEncoding('utf8');


    response.on('data', function(data){
      // console.log('--Chunk received. Length:'+ data.length + " --" );
      body = "";
      body += data;
      console.log(body);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });

  return(output);

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();