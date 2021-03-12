"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {}
    Post.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Post",
        }
    );
    return Post;
};
