import React from 'react';
import { Link } from 'react-router-dom';

function RowTableHome(props) {

    return(

        <>
            <tr>
               
                <td>
                    <Link
                        to={props.to}
                    >
                        <img src={props.td_0} alt="" />
                    </Link>
                </td>
                <td>
                    <Link
                        to={props.to}
                    >
                        <div>
                            <div>{props.td_1}</div>
                            <div>{props.td_5}</div>
                        </div>
                    </Link>
                </td>
                <td>
                    <Link
                        to={props.to}
                    >
                        <div>
                            <div>{
                                props.td_2.map((item, index) => {
                                    return <span key={index}>{item}<br/></span>
                                })
                            }
                            </div>
                            <div>{props.td_3}</div>
                            <div>{props.td_4}</div>
                        </div>
                    </Link>
                </td>
                
            </tr>
        </>
    )
}

export default RowTableHome
