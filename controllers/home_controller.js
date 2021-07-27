const Post=require('../models/post');
const User=require('../models/user');
module.exports.home = async function(req, res){
    // Post.find({},function(err,posts)
    // {
    //     return res.render('home', {
    //         title: "Home Page",
    //         posts:posts
    //     });
    // });

    //populate the user

    try{
        let posts=await Post.find({})
        .populate('user')
        .populate({
                path:'comments',
                populate:
                {
                    path:'user'
                }
        });
    
        let users= await User.find({});
        return res.render('home', {
            title: "Home Page",
            all_users:users,
            posts:posts
        });
    
    }
    catch(err)
    {
        console.log('Error',err);
    }
    
}

// module.exports.actionName = function(req, res){}