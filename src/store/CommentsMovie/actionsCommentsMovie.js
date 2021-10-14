import {
    START_GET_COMMENT_MOVIE_REQUEST,
    GET_COMMENT_MOVIE_REQUEST,
    ADD_COMMENT,
    DELETE_COMMENT,
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

export const saveComment = (value, id, oldArrMuvie) => {

    console.log('value', value)

    let arr = [{
        idMovieComment: '',
        arrComments: []
    },];
    let objNull = {
            idMovieComment: '',
            arrComments: []
        };

    oldArrMuvie.map((obj, index) => {
        let objNew = {
            idMovieComment: '',
            arrComments: []
        };

            if (obj.idMovieComment == id) {
                objNew = obj;
                objNew.arrComments.push(value);
            } else if (obj.idMovieComment != '' && obj.idMovieComment != id){
                objNew = obj;
            } else {
                objNew = objNull;
                console.log(' objNew', objNew)
                console.log('value', value)
                objNew.idMovieComment = id;
                objNew.arrComments.push(value);
            };
        arr.push(objNew);
    })

    return {
        type: ADD_COMMENT,
        payload: arr
    }
}
export const deleteComment = (data, id, oldArrMuvie) => {

    let arr = [];

    oldArrMuvie.map((obj, index) => {
        let objNew = {};

        if (obj.idMovieComment == id) {
            objNew = {
                idMovieComment: '',
                arrComments: []
            };
            objNew.idMovieComment = id;

            obj.arrComments.map((item, index) => {
                if (index != data) {
                    objNew.arrComments.push(item);
                }
            })
        } else {
            objNew = obj;
        };
        arr.push(objNew);
    })

    return {
        type: DELETE_COMMENT,
        payload: arr
    }
}