import {
    GET_REQUEST,
} from "./types";

const initialState = {
    stateTable: {
        data: {
            movies: []
        }
    },
    pageActive: '1',
};



const stateHome = (state = initialState, action) => {

    switch (action.type) {

        case GET_REQUEST:
            return {
                ...state,
                stateTable: action.payload
            }  

        default:
            return state;
    }
}
export default stateHome