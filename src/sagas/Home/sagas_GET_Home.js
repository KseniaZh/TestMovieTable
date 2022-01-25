import { takeEvery, select, put, call } from 'redux-saga/effects';
import {
    getRequestServer,
    counterDownloadedMovies,
    counterPageActive,
} from '../../store/Home/actionsHome';
import { countMuvieSelect } from '../../store/Filter/actionsFilter';

import { START_HOME_GET_REQUEST } from '../../store/Home/types';
import fetchData from '../../functions/fetchData';


export function* workerStart_GET_RequestServer() {

    const url_all = yield select(state => state.stateUrl.url_GET_Home_Table);
    const stateHome = yield select(state => state.stateHome);
    const pageActive = Number(stateHome.pageActive) + 1;
    const limit = Number(stateHome.limitDownloadMovies);
    const stateFilter = yield select(state => state.stateFilter);
    const filter = stateFilter.stateFormSearch;
    const quality = filter[0].valueSelect;
    const genre = filter[1].valueSelect;
    const rating = filter[2].valueSelect;
    const query_term = stateFilter.inputSearch;
    const sort_by = stateFilter.valueSelect;

    const url = `${url_all}?limit=${limit}&page=${pageActive}&quality=${quality}&genre=${genre}&minimum_rating=${rating}&query_term=${query_term}&sort_by=${sort_by}`;
  
    //так выглядит запрос  https://yts.mx/api/v2/list_movies.xml?sort=seeds&limit=15


    try {
        const data = yield call(fetchData, url);

        let dataMuvie = data.data.movies;

        yield put(getRequestServer(dataMuvie, stateHome.stateTable));

        yield put(countMuvieSelect(data));

        yield put(counterDownloadedMovies(stateHome.limitDownloadMovies, stateHome.counterDownloadedMovies));

        yield put(counterPageActive(pageActive));


    } catch (error) {
        console.log('workerStart_GET_RequestServer error ', error);
    }
}

export function* watch_Table_GET_RequestServer() {

    yield takeEvery(START_HOME_GET_REQUEST, workerStart_GET_RequestServer)
}