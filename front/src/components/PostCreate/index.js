import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, errorPost } from "../../actions/postsAction";
import useForm from "../../hooks/useForm";

const initState = {
    name: "",
    description: "",
};

const PostCreate = () => {
    const { error } = useSelector((state) => state.posts);
    const { form, onInputChange, reset } = useForm(initState);
    const dispatch = useDispatch();

    const { name, description } = form;

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!name || !description)
            return dispatch(errorPost({ message: "Debes rellenar los datos" }));

        dispatch(createPost(form, onFinish(event.target)));
    };

    const onFinish = (target) => () => {
        target.reset();
        reset();
    };

    return (
        <>
            <hr />
            <form onSubmit={onSubmit}>
                <div className="row post">
                    <div className="three columns">
                        <label htmlFor="name-input">Nombre</label>
                        <input
                            className="u-full-width"
                            name="name"
                            id="name-input"
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="six columns">
                        <label htmlFor="description-input">Descripción</label>
                        <input
                            className="u-full-width"
                            name="description"
                            id="description-input"
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="three columns">
                        <button type="submit">Crear</button>
                    </div>
                </div>
                {error && (
                    <div className="row text-center">{error.message}</div>
                )}
            </form>
        </>
    );
};

export default PostCreate;
