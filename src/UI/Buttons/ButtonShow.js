import React from 'react';

function ButtonShow(props) {


    return(
        <>
            <button
                onClick={props.onclick}
            >
                {props.nameButton}
            </button>
        </>
    )
}

export default ButtonShow