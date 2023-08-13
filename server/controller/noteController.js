const asyncHandler = require("express-async-handler")
const Note = require("../model/noteModel")


const createPost = asyncHandler(async (req, res) => {
    const {title, content} = req.body
    console.log(title, content) 
    // const userId = req.user._id
    const newNote = await Note.create({
        title: title, 
        notes: content,
        author: req.user._id
    })
    console.log(newNote)
    res.status(201).json({success: true, data: newNote})

})

const seePosts = asyncHandler(async (req, res) => {
    const posts = await Note.find()
    res.status(201).json({success: true, data: posts})
})

const seePost = asyncHandler(async (req, res) => {
    const post = await Note.findById(req.params.id)
    if(!post){
        res.status(404)
        throw new Error("No such post")
    }
    res.status(201).json({success: true, data: post})
})

const seeMyPost = asyncHandler(async (req, res) => {
    try {
        const authoredPost = await Note.find({ author: req.user.id });
        
        if (!authoredPost || authoredPost.length === 0) {
            res.status(404).json({ success: false, message: "You don't have any posts" });
        } else {
            res.status(200).json({ success: true, data: authoredPost });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


const updatePost = asyncHandler(async (req, res) => {
    const updatePost = await Note.findById(req.params.id)
    if(!updatePost) {
        res.status(404)
        throw new Error("Post not found")
    }
    if(updatePost.author.toString() !== req.user.id){
        throw new Error("You dont have permission to update this post")
    } else {
        const updatedPost = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        res.status(200).json(updatedPost)
    }

})

const deletePost = asyncHandler(async (req, res) => {
    const deletePost = await Note.findById(req.params.id)
    console.log(deletePost)
    if(!deletePost) {
        throw new Error("Post not found")
    }
    if(deletePost.author.toString() !== req.user.id){
        throw new Error("You dont have permission to update this post")
    } else {
        const deletedPost = await Note.findByIdAndDelete(req.params.id)

        res.status(200).json({success: true, message:deletedPost})
    }

})



module.exports = {
    createPost,
    seePosts,
    updatePost,
    deletePost,
    seePost,
    seeMyPost
}