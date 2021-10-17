import React from 'react';

function RowTableHomeThead(props) {

    return(
        <>
            <tr>
                <td></td>
                <td onClick={props.onclick}>
                    <div onClick={props.onclick}>
                        <div>{props.td_1}</div>
                        <div>{props.td_5}</div>
                    </div>
                </td>
                <td>
                    <div>
                        <div>{props.td_2}</div>
                        <div>{props.td_3}</div>
                        <div>{props.td_4}</div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default RowTableHomeThead
