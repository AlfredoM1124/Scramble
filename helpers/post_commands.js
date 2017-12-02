var fs = require('fs');
var express = require('express').Router;
var bodyParser = require('body-parser');
var Uploader = require('express-uploader');
var morgan = require('morgan');
var app = express();

// Configuration
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// Display upload form
function sendUploadForm() {
    app.get('/', function(req, res) {
    res.send(
            '<form action="/upload" method="post" enctype="multipart/form-data">' +
            '  <input type="file" name="upload-file"  multiple="true">' +
            '  <input type="submit" value="Upload">' +
            '</form>'
            );
    });
}

// Route that takes the post upload request and sends the server response
function uploadPhoto() {
    app.all('/upload', function(req, res, next) {
        var uploader = new Uploader({
            debug: true,
            validate: true,
            thumbnails: true,
            thumbToSubDir: true,
            tmpDir: __dirname + '/tmp',
            publicDir: __dirname + '/public',
            uploadDir: __dirname + '/public/files',
            uploadUrl: '/files/',
            thumbSizes: [140, [100, 100]]
        });

        uploader.uploadFile(req, function(data) {
            res.send(JSON.stringify(data), {'Content-Type': 'text/plain'}, 200);
        });
    });
}

// Create tmp dir that will contain Uploaded data
function mkTmp() {
    if (!fs.existsSync(__dirname + '/tmp')) {
        fs.mkdirSync(__dirname + '/tmp', 0755);
    }
}

module.exports = {
    sendUploadForm,
    uploadPhoto,
    mkTmp
}