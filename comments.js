// Create web server
var app = express();

// Configure web server
app.use(express.static(__dirname + '/public'));

// Start web server
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});