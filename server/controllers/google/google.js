
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../../models/auth/register")


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
      
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
           
            user = new User({
                googleId: profile.id,
                userName: profile.displayName,
                googleEmail: profile.emails[0].value,
                googleAvatar: profile.photos[0].value,
                isAccountVerified: true
            });

            await user.save();
        }

        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    // console.log("id",id)
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;
