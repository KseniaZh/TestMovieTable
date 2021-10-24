import React, { useEffect, useRef } from 'react';

function Input (props){
    
    const data = props.data;
    const typeInput = props.type;

    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, []);
 
    return(
        <div className={props.classNameInput}>
        
            <label 
                    htmlFor={props.id}
            >
                {props.labelInput}
           </label>
        
            <input
                    id = {props.id}
                    type = {props.type}
                    placeholder={props.placeholder}
                    onChange={(event) => props.onchange(event, data, typeInput)}
                    value = {props.value}
                    tabIndex = {props.tabindex}
                    autoComplete='off'
                    ref={ref}
            />

        </div>
    )
}

export default Input

