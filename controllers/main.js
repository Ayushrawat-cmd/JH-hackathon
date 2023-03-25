exports.getHomePage = (req,res,next)=>{
    res.render("home/main");
};

exports.getContactPage = (req,res,next) =>{
    res.render("home/contact");
}