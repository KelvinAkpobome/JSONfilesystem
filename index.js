const http = require('http');
const fs = require('fs');

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {  
        fs.writeFile('./result/posts.txt', rawData, function(err) {
            if(err) {
            return console.log(err);
            } 
        })
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});