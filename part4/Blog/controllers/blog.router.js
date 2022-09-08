const router = require("express").Router();
const {request, response} = require("express");
const BlogModel = require("../models/blog.model");

router.get("/read", async (request, response) => {
    try{
        const readBlog = await BlogModel.find();
        return response.status(201).json(readBlog);
    }catch(error){
        return response.status(500).json({error: error.message})
    }
})

router.post("/create", async (request, response) =>{
    try{
        const createBlog = await BlogModel.create(request.body);
        return response.status(201).json(createBlog);
    }catch(error){
        return response.status(500).json({error: error.message})
    }
})

module.exports = router;