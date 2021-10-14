import React from 'react';

import Textarea from '../../UI/Input/Textarea';
import Button from '../../UI/Buttons/Button';

function AddCommentForm (props){
   

    return (
        <div className='AddCommentForm'>
            <Button
                classname='buttonCloseCommente'
                onclick={props.onclickSaveComment}
                name='&#215;'
            />
            <div>
                <div>{props.nameWindow}</div>
 
                <form>
                    <Textarea
                            data=''
                            id='addComment'
                            label='Add a new comment'
                            placeholder='Commentary on the film'
                            tabindex=''
                            onchange={props.onchange}
                            value={props.value}
                            autofocus='true'
                            autoComplete='off'
                            cols='45'
                            rows='9'
                            disabled=''
                        />
                    <Button
                        classname='buttonGoComment'
                        onclick={props.onclickSaveComment}
                        name='Save comment'
                    />

                </form>
            </div>
        </div>

    )
}

export default AddCommentForm