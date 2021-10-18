import {
    GET_REQUEST,
    START_HOME_GET_REQUEST,
    COUNTER_PAGE_ACTIVE,
    COUNTER_DOWNLOADED_MOVIES,
    SAVE_SCROLL_HEIGHT,

} from "./types";

export const startHome_GET_RequestServer = () => {
    return {
        type: START_HOME_GET_REQUEST
    }
}

export const getRequestServer = (dataFromServer, stateTableOld) => {

    let stateTable = [ ...stateTableOld, ...dataFromServer ];

    return {
        type: GET_REQUEST,
        payload: stateTable
    }
}


export const counterDownloadedMovies = (limitDownloadMovies, counterDownloadedMoviesOld) => {

    let counterDownloadedMovies = Number(counterDownloadedMoviesOld) + Number(limitDownloadMovies);

    return {
        type: COUNTER_DOWNLOADED_MOVIES,
        payload: counterDownloadedMovies
    }
}
export const counterPageActive = (pageActive) => {

    return {
        type: COUNTER_PAGE_ACTIVE,
        payload: pageActive
    }
}

export const saveScrollTop = (y) => {

    const scrollTop = Number(y);

    return {
        type: SAVE_SCROLL_HEIGHT,
        payload: scrollTop
    }
}
