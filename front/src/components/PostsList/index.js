import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import { deletePost, loadPosts } from "../../actions/postsAction";

const PostsList = () => {
    const { posts } = useSelector((state) => state.posts);
    useEffect(() => {}, [posts]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    const onClickDelete = async (id) => {
        await dispatch(deletePost(id));
    };

    return (
        <>
            <div className="row post header">
                <div className="three columns">Nombre</div>
                <div className="six columns">Descripción</div>
                <div className="three columns"> Acción</div>
            </div>
            {posts.length ?
                posts.map((post) => (
                    <div key={post.id} className="row post">
                        <div className="three columns">{post.name || ""}</div>
                        <div className="six columns">{post.description || ""}</div>
                        <div className="three columns">
                            <button onClick={() => onClickDelete(post.id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                )) : <div className='row text-center mt-2'>No hay posts</div>
            }
        </>
    );
};

export default PostsList;
