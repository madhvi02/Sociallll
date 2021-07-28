const express = require('express');

const env=require('./config/environment');
const cookieParser = require('cookie-parser');
const path=require('path');
const app = express();
require('./config/view-helpers')(app);
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');
const flash=require('connect-flash');
// used for session cookie
const session = require('express-session');
const customFlash=require('./config/middleware');
const passport = require('passport');
const passportLocal = require('./config/passport-local-stratergy');
const passportJWT=require('./config/passport-jwt');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
//const path=require('path');
if(env.name=='development')
{
    app.use(sassMiddleware(
        {
            src: path.join(__dirname,env.asset_path,'scss'),
            dest: path.join(__dirname,env.asset_path,'css'),
            debug:true,
            outputStyle:'extended',
            prefix:'/css'
        }
    ));
}


app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static(env.asset_path));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthentication);

app.use('/uploads',express.static(__dirname+'/uploads'));

app.use(flash());
app.use(customFlash.setFlash);
// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
