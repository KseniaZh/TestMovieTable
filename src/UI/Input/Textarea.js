import React, { useRef, useEffect } from 'react';

function Textarea (props){

    const ref= useRef();
    
    useEffect( ()=>{
        ref.current.focus();    
    }, []);
    
    return(
        <div>
            <label 
                    htmlFor={props.id}
                    className={props.classNameLabel}
        
            >
                {props.label}
            </label>
        
           <textarea
                    ref = {ref}
                    id = {props.id}
                    placeholder = {props.placeholder}
                    onChange = {(event)=>props.onchange(event)}
                    tabIndex = {props.tabindex}
                    value = {props.value}
                    className = {props.classNameTextarea}
                    cols = {props.cols}
                    rows = {props.rows}
                    disabled = {props.disabled}
            />
        </div>
    )
}

export default Textarea