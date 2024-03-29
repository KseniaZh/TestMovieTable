﻿import React from 'react';

function Select(props) {

    return(

        <div className={props.classname}>
            <div>{props.headerSelect}:</div>
            <select
                    name={props.nameSelect}
                    size={props.sizeSelect}
                    value={props.valueSelect}
                    onChange={props.handlerChange}
            >
                {
                    props.optionSelect.map((item, index) => {

                        return <option
                                    value={item.value}  
                                    key={index}
                                >
                                    {item.value}
                        </option>
                    })
                }
             </select>
        </div>
    )
}

export default Select
