const express = require("express");
const router = express.Router();

const { Post } = require("../models/index");
const { BadRequest } = require("../utils/errors");

/* GET home page. */
router.get("/posts", async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

router.post("/posts", async (req, res, next) => {
    try {
        const { name, description } = req.body;
        if (!name || name.length < 2)
            throw new BadRequest(
                "Debes incluir nombre o debe tener mas de 2 caracteres"
            );

        if (!description || description.length < 2)
            throw new BadRequest(
                "Debes incluir descripcion o debe tener mas de 2 caracteres"
            );

        const post = await Post.create({
            name,
            description,
        });
        res.json(post);
    } catch (error) {
        console.log(error.status);
        next(error);
    }
});
router.delete("/posts/:postId", async (req, res, next) => {
    try {
        const { postId } = req.params;
        if (!postId) throw new BadRequest("Debes incluir postId");
        const post = await Post.findOne({ where: { id: postId } });
        await post.destroy();
        res.json(post);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
