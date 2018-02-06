express = require('express');
var app = express();

app.use('/api/test', function(req, res) {
    res.send('hellow world');

});

app.listen(3000, function() {
    console.log("app is listening on port 3000");
});