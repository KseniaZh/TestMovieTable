import {
    GET_REQUEST,
    START_HOME_GET_REQUEST,

} from "./types";

export const startHome_GET_RequestServer = () => {
    return {
        type: START_HOME_GET_REQUEST
    }
}

export const getRequestServer = (dataFromServer) => {

    console.log(dataFromServer);

    return {
        type: GET_REQUEST,
        payload: dataFromServer
    }
}
