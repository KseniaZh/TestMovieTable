import React from 'react';

import Button from '../../UI/Buttons/Button';


function Comment(props) {

   
    return (
        <div className='commentComponent'>
            <div></div>
            <div>{props.comment}</div>
            <Button
                classname='buttonCommentDelete'
                onclick={props.onclick}
                name={props.name}
                data={props.data}
            />
        </div>

    )
}

export default Comment


