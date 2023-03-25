const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const User = require("./models/user");

const MONGODB_URI = 'mongodb+srv://admin-ayush:ayush123@cluster0.itvnq.mongodb.net/womenHackathon?retryWrites=true&w=majority';
const app = express();

const store = new MongoDBStore({ // study this
    uri: MONGODB_URI,
    collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(body_parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))


app.use(
    session({
        secret:"my secret",
        resave: false,
        saveUninitialized:false,
        store:store
    })
)

app.use((req,res,next)=>{
    if(!req.session.user){
        return next();
    }
    User.findById(req.session.user._id).then(
        user=>{
            req.user = user;
            next();
        }
    ).catch(err=>{console.log(err);});
});

const AuthRoutes = require('./routes/auth');
const MainRoutes = require("./routes/main");

app.use(AuthRoutes);
app.use(MainRoutes);

mongoose.connect(uri=MONGODB_URI,{
    useUnifiedTopology: true,
	useNewUrlParser: true,
  }).then(result =>{
    app.listen(3000, (err)=>{
        if(err)
            console.log(err);
        console.log("listening on port 3000");
    });

  }).catch(err=>{
    console.log(err);
  })
