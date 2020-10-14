const FacebookUserService = require('../services/facebookUser')
const Services = new FacebookUserService()
module.exports = (faceApp, passport) => {
    FacebookStrategy = require('passport-facebook').Strategy;

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:2020/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
    },

        async function (accessToken, refreshToken, profile, done) {
            const { id, name, email, picture } = profile._json;
            const UserData = await Services.findOne({ facebook_id: id })
            if (UserData.length) {
                const configuration = await Services.Update({ facebook_id: id, name: name, email: email, profile_picture: picture.data.url })
                if (configuration) {
                    var userInfo = await Services.findOne({ facebook_id: id })
                }
            } else {
                var userInfo = await Services.Create({ facebook_id: id, name: name, email: email, profile_picture: picture.data.url });
            }
            done(null, userInfo);
        }

    ));


    passport.serializeUser((user, done) => {
        done(null, user)
    })

    faceApp.get('/auth/facebook', passport.authenticate('facebook'));

    faceApp.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedireact: '/', failureRedirect: '/login' }),
        function (req, res) {
            req.app.set('user', res.req.user)
            res.redirect('/login');
        });
}