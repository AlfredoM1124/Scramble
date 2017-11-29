var express = require('express');
var bodyParser = require('body-parser');
var Uploader = require('express-uploader');

module.exports = function uploadFile(picture){
    picture.all('/upload', function(req, res, next){
        var uploader = new Uploader({
            debug: true,
            validate: true,
            thumbnails: true, 
            thumbToSubDir: true,
            tmpDir: __dirname + '/tmp',
            publicDir: __dirname + '/public',
            uploadDir: __dirname + '/public/files',
            uploadUrl: '/files/',
            thumbSizes: [140,[100, 100]]
        }); 
        uploader.uploadFile(req, function(data) {
            res.send(JSON.stringify(data), {'Content-Type': 'text/plain'}, 200);
    });
})};