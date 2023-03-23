const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAuth = (req,res,next)=>{
    res.render('auth/auth.ejs')
};

exports.postLogin = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    
}

exports.postRegister = (req,res,next) =>{
    const name  = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}).then(
        userDoc =>{
            if(userDoc){
                return res.redirect("/auth");
            }
            bcrypt.hash(password, 12).then(
                hashedPassword =>{
                    const user = new User({
                        name: name,
                        age: age,
                        email:email,
                        password:hashedPassword
                    });
                    return user.save();
                }
            ).then(
                user =>{
                    const token = jwt.sign({user_id: user._id, email}, "my secret",{
                        expiresIn: "2d",
                    });
                    user.token = token;
                    return user.save();
                }
            ).then(user =>{
                req.session.isloggedIn = true;
                req.session.user = user;
                return req.session.save(err=>{
                    if(err)
                        console.log(err);
                    return res.redirect("/");
                })
            }).catch(err =>{
                console.log(err);
            });
        }
    );
};