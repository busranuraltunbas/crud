const res = require("express/lib/response");
const Post = require("./Post")
const PostService = require("./PostService")
const postService = new PostService()

class PostController {
    async create(post){
        //const createdPost = await Post.create(post)
        //return createdPost;
        
        try {
            //const{author, title, content, picture} = req.body
            //const post = await Post.create({author, title, content, picture})
            const post = await postService.create(req.body)
            res.json(post)
        } catch (error) {
            res.status(403).json(error)
        }
    }

    async getAll(reg, res){
        try {
            //const posts = await Post.find()
            const post = await postService.find()
            return res.json(post)
        } catch (error) {
            res.status(403).json(error)
        }
    }

    async getOne(req, res){
        try {
            //const { id } = req.params.id
            const { id } = reg.params
            if(!id){
                res.status(400).json({message: 'id not found'})
            }
            const post = await postService.findById()
            //const post = await Post.findById()
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
     
    async update(req, res){
        try {
            const post = req.body
            if (!post.id) {
                res.status(400).json({message: 'id not found'})
            }
            //const old = await Post.findById(post.id)
            //old.author = post.author ? post.author : old.author

            //const updatePost = await Post.findByIdAndUpdate(post.id, post, {new: true})
            const updatePost = await postService.update(post)
            return res.json(updatePost)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({message: 'id not found'})
            }
            //const post = await Post.findByIdAndDelete(id)
            const post = await postService.delete(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PostService