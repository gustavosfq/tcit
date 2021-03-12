import axios from "../services/axios";
import { POST_TYPES } from "./types";

const loadPosts = () => async (dispatch) => {
    try {
        const posts = await axios.get("/posts");
        dispatch({
            type: POST_TYPES.LOAD_POSTS,
            payload: posts.data || [],
        });
    } catch (error) {
        dispatch(_errorPost(error.response.data));
    }
};

const deletePost = (id) => async (dispatch) => {
    try {
        const post = await axios.delete("/posts/" + id);
        dispatch({
            type: POST_TYPES.DELETE_POST,
            payload: post.data,
        });
    } catch (error) {
        dispatch(_errorPost(error.response.data));
    }
};

const createPost = (data = {}, onFinish) => async (dispatch) => {
    try {
        const post = await axios.post("/posts", {
            ...(data.name && { name: data.name }),
            ...(data.description && { description: data.description }),
        });
        dispatch({
            type: POST_TYPES.CREATE_POST,
            payload: post.data,
        });
        onFinish();
    } catch (error) {
        dispatch(_errorPost(error.response.data));
    }
};

const filterPost = (name) => async (dispatch) => {
    dispatch({
        type: POST_TYPES.FILTER_POSTS,
        payload: name,
    });
};

const errorPost = (error) => async (dispatch) => {
    dispatch({ type: POST_TYPES.ERROR_POST, payload: error });
};

const _errorPost = (error) => {
    console.log(error);
    return { type: POST_TYPES.ERROR_POST, payload: error };
};

export { loadPosts, deletePost, createPost, filterPost, errorPost };
