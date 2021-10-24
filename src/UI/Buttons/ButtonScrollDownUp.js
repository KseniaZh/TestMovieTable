import React from 'react';

const ButtonScrollDownUp = (props) =>{


    return (
        <>
            {
                props.flag ?
                    <div
                        className={props.classname}
                        onClick={props.onclick}
                    >
                            <div>
                                {props.nameButton}
                            </div>
                    </div>
                    :null
            }
            
        </>
    )
}

export default ButtonScrollDownUp