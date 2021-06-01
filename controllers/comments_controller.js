const Comments=require('../models/comment');
const Post=require('../models/post');
//it will analyse the comment created and save in db
module.exports.create=function(req,res)
{
    Post.findById(req.body.post,function(err,post)
    {
        if(err)
        {
            console.log('Post not found');
            return ;
        }
        Comments.create({
            content:req.body.content,
            post:req.body.post,
            user:req.user._id

        },function(err,comment)
        {
            if(err)
            {
               console.log('Post not found');
               return ;
            }
            post.comments.push(comment);
            //i need to call save if we update anything 
            post.save();
            return res.redirect('/');
        });
    })
};
module.exports.destroy = function(req, res){
    Comments.findById(req.params.id, function(err, comment){
        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    });
}

