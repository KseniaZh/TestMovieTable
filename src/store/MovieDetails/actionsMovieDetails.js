import {
    START_GET_MOVIE_DETAILS_REQUEST,
    GET_MOVIE_DETAILS_REQUEST,
    REMEMBER_ID_MOVIE,

} from "./types";

export const startMovieDetails_GET_RequestServer = () => {
    return {
        type: START_GET_MOVIE_DETAILS_REQUEST
    }
}
export const getRequestServerMovieDetails = (dataFromServer) => {

    return {
        type: GET_MOVIE_DETAILS_REQUEST,
        payload: dataFromServer
    }
}
export const rememberIdMovie = (data) => {

    let id = data.substr(1);

    console.log('rememberIdMovie ID', id);
    return {
        type: REMEMBER_ID_MOVIE,
        payload: id
    }
}
