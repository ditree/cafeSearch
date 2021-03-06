const passport = require('passport'),
User = reqire('../models/user.model'),
JwtStrategy = require('passport-jwt').Strategy,
Extract = require('passport-jwt').ExtractJwt,
LocalStrategy = require('passport-local');

const config = require('./config');

const localOptions = {
    usernameField: 'email'
};

// local login strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false, {error: 'Your login details could not be verified. Please try again.'}); }
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (!isMatch) { return done(null, false, {error: 'Your login details could not be verified. Please try again'}); }
            return done(null, user);
        });
    });
});

// JWT strategy
const jwtOptions = {
    // check authorization header
    jwtFromRequest: Extract.fromAuthHeader(),
    // find secret
    secretOrKey:config.jwtSecret
};

// JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload._id, (err, user) => {
        if (err) { return done(err, false); }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }

    });
});

passport.use(jwtLogin);
passport.use(localLogin);
