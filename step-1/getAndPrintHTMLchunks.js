

function getAndPrintHTMLChunks () {

  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  console.log("checking stuff")

  var output = https.get(requestOptions, function(response) {

    response.setEncoding('utf8');


    response.on('data', function(data){
      // console.log('--Chunk received. Length:'+ data.length + " --" );
      console.log(data.toString() + '\n' );
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });

  console.log(output);
};

getAndPrintHTMLChunks();
