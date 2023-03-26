exports.getHomePage = (req,res,next)=>{
    res.render("home/main", {path: '', isLoggedIn: req.session.isloggedIn});
};

exports.getContactPage = (req,res,next) =>{
    res.render("home/contact", {path: '/contact' , isLoggedIn: req.session.isloggedIn});
}

exports.getAboutPage = (req,res,next) =>{
    res.render("home/about", {path: '/about' , isLoggedIn: req.session.isloggedIn});
}

exports.getTeamPage = (req,res,next) =>{
    res.render("home/team", {path: '/team', isLoggedIn: req.session.isloggedIn});
}

exports.getBlogPage = (req,res,next) =>{
    res.render("home/blog", {path: '/blog' , isLoggedIn: req.session.isloggedIn});
}

exports.getprojectsPage = (req,res,next) =>{
    res.render("home/projects", {path: '/projects' , isLoggedIn: req.session.isloggedIn});
}