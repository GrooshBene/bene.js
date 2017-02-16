/**
 * Created by GrooshBene on 2017-02-14.
++ */
var passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');

function initialize(){
    app.use(passport.initialize());
    app.use(passport.sesson());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });
}

// function setStrategy(social, clientID, clientSecret){
//     switch(social){
//         case 'facebook' :
//             passport.use(new FacebookTokenStrategy({
//                 clientID : clientID,
//                 clientSecret : clientSecret,
//             }, function (accessToken, refreshToken, profile, done) {
//
//             }))
//     }
// }