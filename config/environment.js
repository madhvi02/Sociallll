const development=
{
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'tPg9Z9uvgUFoQOJ0D5vXHRkHffmseZWt',
    db: 'codeial_development',
    google_clientID: '889662818964-7pthb7hp6utrcga22lon0g2ui5d7st9n.apps.googleusercontent.com', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
    google_clientSecret: 'eXrsqA7mGrS8Wpe7ORFaZO-A', // e.g. _ASDFA%KFJWIASDFASD#FAD-
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'nxXN*5#WM2bN5US!N0X('
}


const production=
{
    name:'production',
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL_DB,
    google_clientID: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_clientSecret: process.env.CODIEAL_CLIENT_SECRET, // e.g. _ASDFA%KFJWIASDFASD#FAD-
    google_callbackURL: process.env.CODEIAL_CALLBACK_URL,
    jwt_secret: process.env.CODEIAL_JWT_SECRET
}


module.exports= eval(process.env.CODEIAL_ENVIRONMENT)==undefined ? development: eval(process.env.CODEIAL_ENVIRONMENT) ;