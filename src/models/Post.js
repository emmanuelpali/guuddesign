import mongoose from "mongoose";

const { Schema, model, models  } = mongoose

const postSchema = new Schema({
    title: {
    type:String,
    required: true,
    },
    desc: {
        type:String,
        required: true,
        },
    img: {
        type:String,
        required: true,            
    },
    content: {
        type:String,
        required: true,            
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true}
)

const Post = models.Post || model("Post", postSchema);

export default Post