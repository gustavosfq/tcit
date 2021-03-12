import { POST_TYPES } from "../actions/types";

// cada reducers tiene su propio state
const initialState = {
    posts: [],
    error: null,
};

// los reducers son los unicos que pueden modificar el store
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPES.LOAD_POSTS:
            localStorage.setItem("POSTS", JSON.stringify(action.payload));
            return {
                ...state,
                error: null,
                posts: action.payload  || [],
            };
        case POST_TYPES.DELETE_POST:
            const filteredPosts = JSON.parse(
                localStorage.getItem("POSTS")
            ).filter((post) => post.id !== action.payload.id);
            console.log(action.payload, filteredPosts);
            localStorage.setItem("POSTS", JSON.stringify(filteredPosts));
            return {
                ...state,
                error: null,
                posts: filteredPosts  || [],
            };
        case POST_TYPES.CREATE_POST:
            const newListPosts = [
                ...JSON.parse(localStorage.getItem("POSTS")),
                action.payload,
            ];
            localStorage.setItem("POSTS", JSON.stringify(newListPosts));
            return {
                ...state,
                error: null,
                posts: newListPosts  || [],
            };
        case POST_TYPES.FILTER_POSTS:
            return {
                ...state,
                posts: JSON.parse(
                    localStorage.getItem("POSTS")
                ).filter((post) =>
                    post.name
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };
        case POST_TYPES.ERROR_POST:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default postsReducer;
