import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterPost } from "../../actions/postsAction";
import useForm from "../../hooks/useForm";

const PostFilter = () => {
    const dispatch = useDispatch();
    const { form, onInputChange } = useForm({
        name: "",
    });

    const { name } = form;
    useEffect(() => {
        if(name.length === 0) {
            dispatch(filterPost(""))
        }
    }, [name]);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        dispatch(filterPost(name));
    }

    return (
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
                <div className="three columns">
                    <button type="submit">Buscar</button>
                </div>
            </div>
        </form>
    );
};

export default PostFilter;
