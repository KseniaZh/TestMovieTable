import React, { useEffect, useRef, useState} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import HomeHead from '../../components/Home/HomeHead';
import HomeMain from '../../components/Home/HomeMain';

import {
    startHome_GET_RequestServer,
    saveScrollTop,
    getRequestServer,
    counterPageActive,
} from '../../store/Home/actionsHome';
import {
    changeValueSelect,
    changeValueInput,
    changeValueSortBy,
} from '../../store/Filter/actionsFilter';


function Home(props) {

    const dispatch = useDispatch();
    const tableRef = useRef(null);

    const stateHome = useSelector(state => state.stateHome);
    const stateFilter = useSelector(state => state.stateFilter);

    const handlerSaveScrollTop = () => {
        dispatch(saveScrollTop(tableRef.current.scrollTop));
    }

    const handlerScrollDownload = () => {

        if (tableRef.current.scrollHeight - (tableRef.current.scrollTop + window.innerHeight) < 1000) {
            dispatch(startHome_GET_RequestServer());
        }
    }

    const [flagOpenFilter, setFlagOpenFilter] = useState(false);

    const handlerOpenFilter = () => {
        setFlagOpenFilter(prev => !prev);
    }

    const handleChangeSelect = (event) => {
        event.preventDefault();
        dispatch(changeValueSelect(event.target.name, event.target.value, stateFilter.stateFormSearch));
    }
    const handlerChangeSortBy = (event) => {
        event.preventDefault();
        dispatch(changeValueSortBy(event.target.value, stateFilter.stateSortBy));
    }
    const handlerChangeInput = (event) => {
        event.preventDefault();
        dispatch(changeValueInput(event.target.value));
    }

    const handlerFilterGoSearch = () => {
        dispatch(counterPageActive(0));
        dispatch(getRequestServer([], []));/* обнуляем, чтоб  залить новые данные с учетом фильтра*/
        dispatch(startHome_GET_RequestServer());
        setFlagOpenFilter(prev => false);
    }

    useEffect(() => {
        if (stateHome.counterDownloadedMovies === 0) {
            dispatch(startHome_GET_RequestServer());
        };

        tableRef.current.scrollTo(0, stateHome.scrollHeight);

        //бесконечная загрузка
        tableRef.current.addEventListener('scroll', handlerScrollDownload);

        return () => {
            tableRef.current.removeEventListener('scroll', handlerScrollDownload);
        }

    }, [])


    return(
        <div className='homeWrapper' >

            <HomeHead
                classname='homeHead'
                flagOpenFilter={flagOpenFilter}
                stateFilter={stateFilter}
                handleChangeSelect={handleChangeSelect}
                handlerChangeInput={handlerChangeInput}
                handlerChangeSortBy={handlerChangeSortBy}
                handlerFilterGoSearch={handlerFilterGoSearch}
                onclickOpenFilter={handlerOpenFilter}
            />

            <HomeMain
                ref={tableRef}
                classname='homeMain'
                stateMainTable={stateHome.stateTable}
                onclick={handlerSaveScrollTop}
                stateFilter={stateFilter}
                handleChangeSelect={handleChangeSelect}
                handlerChangeInput={handlerChangeInput}
                handlerChangeSortBy={handlerChangeSortBy}
                handlerFilterGoSearch={handlerFilterGoSearch}
                onclickOpenFilter={handlerOpenFilter}
            />
        </div>
    )
}

export default connect()(Home)

