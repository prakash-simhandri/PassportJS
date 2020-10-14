const GithubUserService = require('../services/githubUser')
const Services = new GithubUserService()
module.exports = (gitApp, passport) => {
    var GitHubStrategy = require('passport-github2').Strategy;
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:2020/auth/github/callback"
    },
       async function (accessToken, refreshToken, profile, done) {
            const {id, login, avatar_url, name, email} = profile._json
            const UserData = await Services.findOne({ github_id: id })
            if (UserData.length) {
                const configuration = await Services.Update({ github_id: id, name: name, email: String(email), profile_picture:avatar_url,username:login })
                if (configuration) {
                    var userInfo = await Services.findOne({ github_id: id })
                }
            } else {
                var userInfo = await Services.Create({ github_id: id, name: name, email: String(email), profile_picture:avatar_url,username:login });
            }
            return done(null, userInfo);
        }
    ));

    gitApp.get('/auth/github',
        passport.authenticate('github', { scope: ['user:email'] }));

    gitApp.get('/auth/github/callback',
        passport.authenticate('github', { failureRedirect: '/login' }),
        function (req, res) {
            // Successful authentication, redirect login.
            req.app.set('user', res.req.user)
            res.redirect('/login');
        });

}