import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonIcon(props) {

    const data = props.data;
    
    return(

            <div 
                className= {props.classname}
                onClick={() => props.onclick(data)}
                tabIndex = {props.tabindex}
            >    
                <FontAwesomeIcon
                    icon={props.icon}
                    className='filter_small__icon'
                />
            </div>

    )
}

export default ButtonIcon
