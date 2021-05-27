const Post=require('../models/post');
module.exports.home = function(req, res){
    // Post.find({},function(err,posts)
    // {
    //     return res.render('home', {
    //         title: "Home Page",
    //         posts:posts
    //     });
    // });

    //populate the user
    Post.find({}).populate('user').exec(function(err,posts)
    {
        return res.render('home', {
                    title: "Home Page",
                    posts:posts
        });
    });


}

// module.exports.actionName = function(req, res){}