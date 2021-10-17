import { takeEvery, select, put, call } from 'redux-saga/effects';
import {
    getRequestServer,
    counterDownloadedMovies,
} from '../../store/Home/actionsHome';

import { START_HOME_GET_REQUEST } from '../../store/Home/types';
import fetchData from '../../functions/fetchData';


export function* workerStart_GET_RequestServer() {

    const url_all = yield select(state => state.stateUrl.url_GET_Home_Table);
    const stateHome = yield select(state => state.stateHome);
    const url = `${url_all}&limit=20&page=${stateHome.pageActive}?limit=${Number(stateHome.limitDownloadMovies)}`;

 //  'https://yts.mx/api/v2/list_movies.json?quality=3D?limit=10?page=5';

    try {
        const data = yield call(fetchData, url);

        let dataMuvie = data.data.movies;

        yield put(getRequestServer(dataMuvie, stateHome.stateTable));

        yield put(counterDownloadedMovies(stateHome.limitDownloadMovies, stateHome.counterDownloadedMovies));
        
  
    } catch (error) {
        console.log('workerStart_GET_RequestServer error ', error);
    }
}

export function* watch_Table_GET_RequestServer(){
    
    yield takeEvery(START_HOME_GET_REQUEST, workerStart_GET_RequestServer)
}