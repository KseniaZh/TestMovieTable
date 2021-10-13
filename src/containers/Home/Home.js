import React, { useEffect} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";

import HomeHead from './HomeHead';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';

import { startHome_GET_RequestServer } from '../../store/Home/actionsHome';


function Home(props) {

    const dispatch = useDispatch();

    const arrThead = ["small cover image",
                        "TITLE",
                        "year",
                        "rating",
                        ["genres"],
                        '/',
                  ];

    const stateMainTable = useSelector(state => state.stateHome.stateTable.data.movies);

    useEffect(() => {
        dispatch(startHome_GET_RequestServer());
    },[]);

    return(
        <div className='homeWrapper'>

            <HomeHead
                classname='homeHead'
            />
            <HomeMain
                classname='homeMain'
                arrThead={arrThead}
                stateMainTable={stateMainTable}
            />
            <HomeFooter
                classname='homeFooter'
            />
        </div>
    )
}

export default connect()(Home)


//const [loaderVisible, setLoaderVisible] = useState(false);

//const buttonShowHandler = () => {
//    setLoaderVisible(prev => !prev);
//};