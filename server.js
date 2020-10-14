const express = require("express")
const app = express()
const passport = require('passport');
const session = require('express-session');
var cors = require('cors')
PORT = process.env.PORT ||2020

app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use(session({ secret: 'hello' }));



// login
var login = express.Router();
app.use("/", login);
require("./lib/Controllers/login")(login)

// google_oauth20
var google_oauth20 = express.Router();
app.use("/", google_oauth20);
require("./lib/Strategy/google_oauth20")(google_oauth20,passport)

var facebook_oauth = express.Router();
app.use("/", facebook_oauth);
require("./lib/Strategy/facebook_oauth")(facebook_oauth,passport)

var linkedin_oauth2 = express.Router();
app.use("/", linkedin_oauth2);
require("./lib/Strategy/linkedin_oauth2")(linkedin_oauth2,passport)

var github2_oauth = express.Router();
app.use("/", github2_oauth);
require("./lib/Strategy/github2_oauth")(github2_oauth,passport)


app.listen(PORT, function (){
    console.log('Example app listening at http://%s/', PORT);
  });