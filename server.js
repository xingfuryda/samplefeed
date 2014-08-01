var express = require('express'),
    Feed = require("feed"),
    app = express();

//app.use(express.logger());

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/rss', function(req, res) {

    // Initializing feed object
    var feed = new Feed({
        title:          'My Feed Title',
        description:    'This is my personnal feed!',
        link:           'http://example.com/',
        image:          'http://example.com/logo.png',
        copyright:      'Copyright © 2013 John Doe. All rights reserved',

        author: {
            name:       'John Doe',
            email:      'john.doe@example.com',
            link:       'https://example.com/john-doe'
        }
    });
    
    //make an item
    feed.addItem({
        title:          'My fake article',
        link:           'http://www.yahoo.com',
        description:    'This is the description',
        date:           new Date(),
        content:        'hi'
    });
    
    // Setting the appropriate Content-Type
    res.set('Content-Type', 'text/xml');

    // Sending the feed as a response
    res.send(feed.render('rss-2.0'));
});

app.listen(process.env.PORT);
console.log('Express server started on port %s', process.env.PORT);