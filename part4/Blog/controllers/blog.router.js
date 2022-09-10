const router = require("express").Router();
const {request, response} = require("express");
const BlogModel = require("../models/blog.model");
const isAuth = require("../middlewares/isAuth");
const attachCurrentUser = require("../middlewares/attachCurrentUser");
const UserModel = require("../models/user.model");


router.get("/read", async (request, response) => {
    try{
        const readBlog = await BlogModel.find().populate("author");
        return response.status(201).json(readBlog);
    }catch(error){
        return response.status(500).json({error: error.message})
    }
})

router.post("/create", isAuth, attachCurrentUser,  async (request, response) =>{
    try{

        const loggedInUser = request.currentUser._id;
        

        const createBlog = await BlogModel.create({...request.body, author: loggedInUser});

        await UserModel.findOneAndUpdate( {_id: loggedInUser} , {$push: {blogs: createBlog._id}}, {new:true});

        
        

        return response.status(201).json(createBlog);
    }catch(error){
        return response.status(500).json({error: error.message})
    }
})

module.exports = router;