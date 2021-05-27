const mongoose=require('mongoose');
const postSchema=new monggose.Schema(
    {
        content:{
            type:String,
            required:true
        },
        user:
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:User
        }
    },
    {
        timestamps: true
    }
);
mongoose.model('Post',postSchema);
module.exports=Post;