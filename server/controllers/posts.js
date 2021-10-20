import PostMsg from "../models/postMesg.js"

export const getPosts = async (req, res)=>{
    try {
        const postMesgs = await PostMsg.find()
        console.log(postMesgs);
        res.status(200).json(postMesgs)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const createPost = async (req, res)=>{
    const post = req.body
    const newPost = new PostMsg(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}