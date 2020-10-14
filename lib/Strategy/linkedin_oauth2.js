const LinkedinUserService = require('../services/linkedinUser')
const Services = new LinkedinUserService()

module.exports = (linkApp, passport) => {
    var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
    passport.use(new LinkedInStrategy({
        clientID: process.env.LINKEDIN_KEY,
        clientSecret: process.env.LINKEDIN_SECRET,
        callbackURL: "http://localhost:2020/auth/linkedin/callback",
        scope: ['r_emailaddress', 'r_liteprofile'],
    },

       async function (accessToken, refreshToken, profile, done) {
            const linkedin_id = profile.id
            const first_name = profile.name.givenName
            const last_name = profile.name.familyName
            const profile_picture = profile.photos[0].value
            const email = profile.emails[0].value
                    const UserData = await Services.findOne({linkedin_id})
                    if (UserData.length) {
                        const configuration = await Services.Update({linkedin_id,first_name,last_name,profile_picture,email})
                        if (configuration) {
                            var userInfo = await Services.findOne({linkedin_id})
                        }
                    } else {
                        var userInfo = await Services.Create({linkedin_id,first_name,last_name,profile_picture,email});
                    }
                done(null, userInfo);
        }));


    passport.serializeUser((user, done) => {
        done(null, user)
    })


    linkApp.get('/auth/linkedin',
        passport.authenticate('linkedin'));

    linkApp.get('/auth/linkedin/callback', passport.authenticate('linkedin', { successRedireact: '/', failureRedirect: '/login' }),
        function (req, res) {
            req.app.set('user', res.req.user)
            res.redirect('/login');
        });
}