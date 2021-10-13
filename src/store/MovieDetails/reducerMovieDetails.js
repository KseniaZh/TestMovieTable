import {
    GET_MOVIE_DETAILS_REQUEST,
    REMEMBER_ID_MOVIE,
} from "./types";

const initialState = {

    idMovie: '',
    movieDetails: {
        data: {
            movie: { background_image:''}
        },
    },
};



const stateMovieDetails = (state = initialState, action) => {

    switch (action.type) {

        case GET_MOVIE_DETAILS_REQUEST:
            return {
                ...state,
                movieDetails: action.payload
            }
        case REMEMBER_ID_MOVIE:
            return {
                ...state,
                idMovie: action.payload
            }

        default:
            return state;
    }
}
export default stateMovieDetails