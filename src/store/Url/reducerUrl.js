import {
} from "./types";

const initialState = {

    url_GET_Home_Table: `https://yts.mx/api/v2/list_movies.json`,
    url_GET_Movie_details: `https://yts.mx/api/v2/movie_details.json?movie_id=`,
    url_GET_Comments_Movie: 'https://yts.mx/api/v2/movie_comments.json?movie_id=',

            };



const stateUrl = (state = initialState, action) => {

    switch (action.type) {
 
        default:
            return state;
    }
}
export default stateUrl