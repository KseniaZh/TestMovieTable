import React from 'react';
import RowTableHome from '../../components/Home/RowTableHome';
import FilterHomeHead from '../../components/Home/FilterHomeHead';


const HomeMain = React.forwardRef((props, ref)=> {

    return (
        <div className={props.classname} ref={ref}>
            <FilterHomeHead
                classname='home_homeMain_filter'
                stateFilter={props.stateFilter}
                onclick={props.hendlerFilterGoSearch}
                handleChangeSelect={props.handleChangeSelect}
                handlerChangeInput={props.handlerChangeInput}
                handlerChangeSortBy={props.handlerChangeSortBy}
                hendlerScrollDownUp={props.hendlerScrollDownUp}
                flagButtonScroll={props.flagButtonScroll}
            />

            <div>
                <table >
                    <tbody >
                        {
                            props.stateMainTable.map((item, index) => {
                           
                                return <RowTableHome
                                            key={index}
                                            to={`/:${item['id']}`}
                                            id={item['id']}
                                            stateTd={item}
                                            onclick={props.onclick}
                                            item={item}
                                        />
                            })
                        }
                    </tbody>
                </table>
            </div>
  
        </div>
    )
})

export default HomeMain
