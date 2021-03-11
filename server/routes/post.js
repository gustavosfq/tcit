const express = require("express");
const router = express.Router();

const { Post } = require("../models/index");

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
    const { name, description } = req.body;
    if (!name || name.lenght < 2)
        throw "Debes incluir name o debe tener mas de 2 caracteres";
    if (!description || description.lenght < 2)
        throw "Debes incluir description o debe tener mas de 2 caracteres";

    try {
        const post = await Post.create({
            name,
            description,
        });
        res.json(post);
    } catch (error) {
        next(error);
    }
});
router.delete("/posts/:postId", async (req, res, next) => {
    const { postId } = req.params;
    if (!postId) throw "Debes incluir postId";
    try {
        const post = await Post.findOne({where:{id:postId}});
        await post.destroy();
        res.json(post);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
