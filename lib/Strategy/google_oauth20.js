const GoogleUserService = require('../services/googleUsers')
const Services = new GoogleUserService()
module.exports = (GooleApp, passport) => {
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CONSUMER_KEY,
        clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
        callbackURL: "http://localhost:2020/google/callback"
    },
        async function (accessToken, refreshToken, profile, done) {
            const {sub, name, given_name,family_name, picture, email} = profile._json;
            const UserData = await Services.findOne({google_id:sub})
            if (UserData.length) {
               const configuration = await Services.Update({google_id:sub,full_name:name,first_name:given_name,last_name:family_name,email:email,profile_picture:picture})
               if (configuration) {
                    var userInfo = await Services.findOne({google_id:sub}) 
               }
            }else{
                var userInfo = await Services.Create({google_id:sub,full_name:name,first_name:given_name,last_name:family_name,email:email,profile_picture:picture});
            }
            done(null, userInfo)
        }
    ));
    passport.serializeUser((user, done) => {
        done(null, user)
    })
    GooleApp.get('/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    GooleApp.get('/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            req.app.set('user',res.req.user)
            res.redirect('/login');
        });
}