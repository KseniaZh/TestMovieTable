import { takeEvery, select, put, call } from 'redux-saga/effects';
import { getRequestServerCommentsMovie } from '../../store/CommentsMovie/actionsCommentsMovie';
import { START_GET_COMMENT_MOVIE_REQUEST } from '../../store/CommentsMovie/types';
import fetchData from '../../functions/fetchData';


export function* workerStart_CommentsMovie_GET_RequestServer() {

    const url_all = yield select(state => state.stateUrl.url_GET_Comments_Movie);
    const idMovie = yield select(state => state.stateMovieDetails.idMovie);
    const url = `${url_all}${idMovie}`;

    console.log('URL', url)

    try {
        const data = yield call(fetchData, url);

        yield put(getRequestServerCommentsMovie(data));
        
    } catch (error) {
        console.log('workerStart_CommentsMovie_GET_RequestServer error ', error);
    }
}

export function* watch_CommentsMovie_GET_RequestServer(){
    
    yield takeEvery(START_GET_COMMENT_MOVIE_REQUEST, workerStart_CommentsMovie_GET_RequestServer)
}