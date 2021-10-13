import {
    GET_COMMENT_MOVIE_REQUEST,
} from "./types";

const initialState = {

    commentsMovie: {},
};



const stateCommentsMovie = (state = initialState, action) => {

    switch (action.type) {

        case GET_COMMENT_MOVIE_REQUEST:
            return {
                ...state,
                commentsMovie: action.payload
            }

        default:
            return state;
    }
}
export default stateCommentsMovie