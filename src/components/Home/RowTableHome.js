import React, { useRef} from 'react';
import { Link } from 'react-router-dom';

function RowTableHome(props) {

    const trRef = useRef(null);

    return(

        <>
            <tr ref={trRef}  >
               
                <td>
                    <Link
                        to={props.to}
                    >
                        <img src={props.td_0} alt="" />
                    </Link>
                </td>
                <td onClick={props.onclick}>
                    <Link
                        to={props.to}
                    >
                        <div onClick={props.onclick}>
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
                            <div>{props.td_4}&#9733;</div>
                        </div>
                    </Link>
                </td>
                
            </tr>
        </>
    )
}

export default RowTableHome
