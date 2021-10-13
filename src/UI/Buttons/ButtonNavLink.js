import React from 'react';
import { NavLink } from 'react-router-dom';

function ButtonNavLink(props) {


    return(
        <div>
            <NavLink
                to={props.to}
                className={props.classnameButtonLink}
            > 
                <div 
                    tabIndex={props.tabindex}
                    style={{ backgroundImage: `url(${props.nameImage})`}}
                >
                    <span
                        className={props.icon}
                        aria-hidden="true"
                    >
                        {props.name}
                    </span>
                </div>
            </NavLink>
        </div>
    )
}

export default ButtonNavLink