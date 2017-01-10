/**
 * Created by user on 1/9/2017.
 */
/*grabbing the dependencies package*/
var express = require('express');
var app = express();

var ig = require("instagram-node").instagram();

//Configuring our APP
ig.use({
    access_token:'1277742400.1677ed0.ba466698ffdf4ec09055ccf789163e9e'
});


/*tells the node where to locate the site resource*/
app.use(express.static( __dirname + '/public'));

/*set the view engine to ejs*/
app.set('view engine', 'ejs');



var port = process.env.PORT || 8080;

/*Home page route*/
app.get('/', function (req, res) {
    //use the instagram package to get popular images
    ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        res.render('pages/index', { grams: medias});
    })
    // res.render('pages/index', { message: 'I am data!' });
});

/*starting the server*/
app.listen(port, function(){
    console.log("App started at port 8080");
});
