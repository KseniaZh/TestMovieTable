import React, { useEffect, useRef} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import HomeHead from './HomeHead';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';
import ButtonScrollDownUp from '../../UI/Buttons/ButtonScrollDownUp';

import {
    startHome_GET_RequestServer,
    counterPageActive,
    saveScrollTop,
} from '../../store/Home/actionsHome';


function Home(props) {

    const dispatch = useDispatch();
    const tableRef = useRef(null);

    const arrThead = ["small cover image",
                        "TITLE",
                        "year",
                        "rating",
                        "genres",
                  ];

    const stateHome = useSelector(state => state.stateHome);
    const pageActive = useSelector(state => state.stateHome.pageActive);

    const hendlerSaveScrollTop = () => {
        dispatch(saveScrollTop(tableRef.current.scrollTop));
        console.log('documentElement.clientHeight', document.documentElement.clientHeight)
        console.log('Home y', document.documentElement.scrollHeight)
    }

    useEffect(() => {
        if (stateHome.counterDownloadedMovies === 0) {
            dispatch(startHome_GET_RequestServer());
        };

        tableRef.current.scrollTo(0, stateHome.scrollHeight);

    }, [])


    return(
        <div className='homeWrapper' ref={tableRef}>

            <HomeHead
                classname='homeHead'
                arrThead={arrThead}
            />
            <HomeMain
                classname='homeMain'
                stateMainTable={stateHome.stateTable}
                onclick={hendlerSaveScrollTop}
            />
            <HomeFooter
                classname='homeFooter'
                counterDownloadedMovies={stateHome.counterDownloadedMovies}
            />
            <ButtonScrollDownUp
                nameButton="&#128640;"
            />
        </div>
    )
}

export default connect()(Home)


//const [loaderVisible, setLoaderVisible] = useState(false);

//const buttonShowHandler = () => {
//    setLoaderVisible(prev => !prev);
//};