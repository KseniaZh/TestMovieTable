import { all } from 'redux-saga/effects';

import { watch_Table_GET_RequestServer } from './Home/sagas_GET_Home';
import { watch_MovieDetails_GET_RequestServer } from './MovieDetails/sagas_GET_MovieDetails';
import { watch_CommentsMovie_GET_RequestServer } from './CommentsMovie/sagas_GET_CommentsMovie';

export default function* rootSaga(){
    yield all( [ 
        watch_Table_GET_RequestServer(),
        watch_MovieDetails_GET_RequestServer(),
        watch_CommentsMovie_GET_RequestServer(),
               ])
}