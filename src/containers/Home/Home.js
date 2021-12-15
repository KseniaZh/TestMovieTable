import React, { useEffect, useRef, useState} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import HomeHead from './HomeHead';
import HomeMain from './HomeMain';
import ButtonScrollDownUp from '../../UI/Buttons/ButtonScrollDownUp';

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
    const pageActive = useSelector(state => state.stateHome.pageActive) + 2;
    const stateFilter = useSelector(state => state.stateFilter);

    const [flagButtonScroll, setFlagButtonScroll] = useState(false);

    const handlerSaveScrollTop = () => {
        dispatch(saveScrollTop(tableRef.current.scrollTop));
    }

    const handlerScrollDownload = () => {

        if (tableRef.current.scrollHeight - (tableRef.current.scrollTop + window.innerHeight) < 1000) {
            dispatch(startHome_GET_RequestServer());
        }
        if (tableRef.current.scrollHeight /pageActive  - (tableRef.current.scrollTop + window.innerHeight) < 3000) {
            setFlagButtonScroll(true);// первично кнопки не видно. появляется при прокрутке
        }
    }

    const handlerScrollDownUp = () => {

        tableRef.current.scrollTo(0, 0);
        let flag = () => (
            setFlagButtonScroll(false)
            )
        setTimeout(flag, 100);
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
        tableRef.current.addEventListener('scroll', hendlerScrollDownload);
        return () => {
            tableRef.current.removeEventListener('scroll', hendlerScrollDownload);
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
                hendlerFilterGoSearch={handlerFilterGoSearch}
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
                hendlerFilterGoSearch={handlerFilterGoSearch}
                onclickOpenFilter={handlerOpenFilter}
            />
          
            <ButtonScrollDownUp
                classname='button_scroll'
                nameButton="&#11121;"
                onclick={handlerScrollDownUp}
                flag={flagButtonScroll}
             
            />
        </div>
    )
}

export default connect()(Home)

