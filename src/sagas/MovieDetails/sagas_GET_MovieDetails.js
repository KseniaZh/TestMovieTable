import { takeEvery, select, put, call } from 'redux-saga/effects';
import { getRequestServerMovieDetails } from '../../store/MovieDetails/actionsMovieDetails';

import { START_GET_MOVIE_DETAILS_REQUEST } from '../../store/MovieDetails/types';
import fetchData from '../../functions/fetchData';


export function* workerStart_MovieDetails_GET_RequestServer() {

    const url_all = yield select(state => state.stateUrl.url_GET_Movie_details);
    const idMovie = yield select(state => state.stateMovieDetails.idMovie);
    const url = `${url_all}${idMovie}`;

    console.log('URL', `${url_all}${idMovie}`)


    try {
        const data = yield call(fetchData, url);

        yield put(getRequestServerMovieDetails(data));
        
  
    } catch (error) {
        console.log('workerStart_MovieDetails_GET_RequestServer error ', error);
    }
}

export function* watch_MovieDetails_GET_RequestServer(){
    
    yield takeEvery(START_GET_MOVIE_DETAILS_REQUEST, workerStart_MovieDetails_GET_RequestServer)
}