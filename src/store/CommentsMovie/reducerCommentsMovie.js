import {
    GET_COMMENT_MOVIE_REQUEST,
    ADD_COMMENT,
    DELETE_COMMENT,
} from "./types";

const initialState = [
        {
            idMovieComment: '',
            arrComments: []
        },
        ];



const stateCommentsMovie = (state = initialState, action) => {

    switch (action.type) {

        case ADD_COMMENT:
            return action.payload

        case DELETE_COMMENT:
            return action.payload

        default:
            return state;
    }
}
export default stateCommentsMovie