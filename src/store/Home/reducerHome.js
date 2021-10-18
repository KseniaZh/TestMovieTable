import {
    GET_REQUEST,
    COUNTER_PAGE_ACTIVE,
    COUNTER_DOWNLOADED_MOVIES,
    SAVE_SCROLL_HEIGHT,

} from "./types";

const initialState = {
    stateTable: [],
    pageActive: 0,
    limitDownloadMovies: '20',
    counterDownloadedMovies: 0,
    scrollHeight: 0,
};



const stateHome = (state = initialState, action) => {

    switch (action.type) {

        case GET_REQUEST:
            return {
                ...state,
                stateTable: action.payload
            }
        case COUNTER_PAGE_ACTIVE:
            return {
                ...state,
                pageActive: action.payload
            }
        case COUNTER_DOWNLOADED_MOVIES:
            return {
                ...state,
                counterDownloadedMovies: action.payload
            }

        case SAVE_SCROLL_HEIGHT:
            return {
                ...state,
                scrollHeight: action.payload
            }

        default:
            return state;
    }
}
export default stateHome