import React from 'react';

import Comment from './Comment';
import AddCommentForm from './AddCommentForm';

function CommentsMovie(props) {

    return (
        <div className='commentsMovie'>
                   
            {
                props.arrComments.map((item, index) => {
                         return <Comment
                                key={index}
                                comment={item}
                                onclick={props.onclickDelete}
                                name={props.nameDelete}
                                data={index}
                            />
                })
            }
            {
                props.flagOpenAddCommentForm ?
                    <AddCommentForm
                        onclickSaveComment={props.onclickSaveComment}
                        onchange={props.onchange}
                        value={props.value}
                        nameWindow={props.nameMuvie}
                    />
                    :null
            }
          

        </div>
    )
}


export default CommentsMovie


