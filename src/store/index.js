import { combineReducers } from "redux";

import stateHome from './Home/reducerHome';
import stateUrl from './Url/reducerUrl';
import stateMovieDetails from './MovieDetails/reducerMovieDetails';
import stateCommentsMovie from './CommentsMovie/reducerCommentsMovie';



const rootReducer = combineReducers({
    stateHome,
    stateUrl,
    stateMovieDetails,
    stateCommentsMovie,

})

export default rootReducer