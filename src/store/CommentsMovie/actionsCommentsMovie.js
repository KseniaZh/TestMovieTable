import {
    START_GET_COMMENT_MOVIE_REQUEST,
    GET_COMMENT_MOVIE_REQUEST,

} from "./types";

export const startCommentsMovie_GET_RequestServer = () => {
    return {
        type: START_GET_COMMENT_MOVIE_REQUEST
    }
}
export const getRequestServerCommentsMovie = (dataFromServer) => {

    return {
        type: GET_COMMENT_MOVIE_REQUEST,
        payload: dataFromServer
    }
}

