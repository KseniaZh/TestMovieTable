import React from 'react';
import ButtonIcon from '../../UI/Buttons/ButtonIcon';
import FilterHomeHead from '../../UI/Filter/FilterHomeHead';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function HomeHead(props) {

     return (
        <div className={props.classname}>
            <div className='home_homeHead_header'>
                <div>LOGO</div>
                <div>HD movies at the smallest file size</div>
                <div>
                    <ButtonIcon
                        classname='home_homeHead_button__open_filter'
                        onclick={props.onclickOpenFilter}
                        icon={props.flagOpenFilter ? faTimes : faBars}
                    />
                </div>
             </div>
             {
                 props.flagOpenFilter ?
                     <FilterHomeHead
                             classname='home_homeHead_filter'
                             stateFilter={props.stateFilter}
                             onclick={props.handlerFilterGoSearch}
                             handleChangeSelect={props.handleChangeSelect}
                             handlerChangeInput={props.handlerChangeInput}
                             handlerChangeSortBy={props.handlerChangeSortBy}
                             onclickOpenFilter={props.onclickOpenFilter}
                     />
                     :null
             }

            
        </div>
    )
}

export default HomeHead

