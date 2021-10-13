import { takeEvery, select, put, call } from 'redux-saga/effects';
import { getRequestServer } from '../../store/Home/actionsHome';

import { START_HOME_GET_REQUEST } from '../../store/Home/types';
import fetchData from '../../functions/fetchData';


export function* workerStart_GET_RequestServer() {

    const url_all = yield select(state => state.stateUrl.url_GET_Home_Table);
    const page_active = yield select(state => state.stateHome.pageActive);
    const url = `${url_all}&limit=20&page=${page_active}`;

 //   const url = 'https://yts.mx/api/v2/list_movies.json?quality=3D?limit=10?page=5';

    try {
        const data = yield call(fetchData, url);

        yield put(getRequestServer(data));
        
  
    } catch (error) {
        console.log('workerStart_GET_RequestServer error ', error);
    }
}

export function* watch_Table_GET_RequestServer(){
    
    yield takeEvery(START_HOME_GET_REQUEST, workerStart_GET_RequestServer)
}