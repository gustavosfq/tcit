import React from "react";
import PostCreate from "./PostCreate";
import PostFilter from "./PostFilter";
import PostsList from "./PostsList";

const TCITApp = () => {
    return (
        <div className="container">
            <h2>TCIT - Posts</h2>
            <PostFilter />
            <PostsList />
            <PostCreate />
        </div>
    );
};

export default TCITApp;
