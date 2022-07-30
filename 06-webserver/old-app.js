const http = require('http');

http.createServer( (req, res) => {
   /*  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    res.write('id, nombre\n');
    res.write('1, Manolo\n'); */

    res.write('Hello world');
    res.end();
})
.listen(8080);
console.log('Listening on port 8080');