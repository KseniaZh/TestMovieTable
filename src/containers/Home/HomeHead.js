import React from 'react';
import Button from '../../UI/Buttons/Button';
import FilterHomeHead from '../../components/Home/FilterHomeHead';

function HomeHead(props) {

     return (
        <div className={props.classname}>
            <div className='home_homeHead_header'>
                <div>LOGO</div>
                <div>HD movies at the smallest file size</div>
                <div>
                    {
                         props.flagOpenFilter ?
                             <Button
                                classname='home_homeHead_button__open_filter'
                                 onclick={props.onclickOpenFilter}

                                name='&#128939;'
                            />
                            :<Button
                                 classname='home_homeHead_button__open_filter'
                                 onclick={props.onclickOpenFilter}

                                name='&#9776;'
                            />
                    }
                    
                 </div>

             </div>
             {
                 props.flagOpenFilter ?
                     <FilterHomeHead
                             classname='home_homeHead_filter'
                             stateFilter={props.stateFilter}
                             onclick={props.hendlerFilterGoSearch}
                             handleChangeSelect={props.handleChangeSelect}
                             handlerChangeInput={props.handlerChangeInput}
                             handlerChangeSortBy={props.handlerChangeSortBy}
                             hendlerScrollDownUp={props.hendlerScrollDownUp}
                             flagButtonScroll={props.flagButtonScroll}
                             flagOpenFilter={props.flagOpenFilter}
                             onclickOpenFilter={props.onclickOpenFilter}
                     />
                     :null
             }

            
        </div>
    )
}

export default HomeHead

