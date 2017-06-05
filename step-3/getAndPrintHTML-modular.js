var https = require('https');

function getAndPrintHTML (obj) {

   body = "";

  var output = https.get("https://" + obj.host + obj.path, function(response) {

    response.setEncoding('utf8');


    response.on('data', function(data){
      // console.log('--Chunk received. Length:'+ data.length + " --" );
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

getAndPrintHTML(requestOptions);