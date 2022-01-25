import React, { useRef} from 'react';
import { Link } from 'react-router-dom';

function RowTableHome(props) {

    const trRef = useRef(null);

    if (props.item.title === undefined) {
        return
    }
    let genres = props.item.genres;
    if (props.item.genres === undefined) {
        genres = [];
    }
//"small_cover_image"
//"title"
//"year"
//"rating"
//"genres": ["Comedy", "Drama"],
//    "description_full": "Two neighbors, Justas and Povilas, are going fishing. The men set camp on a remote island and chat about stuff when the conversation unexpectedly turns into not only an intriguing story about their past, but also about life and death.",
    return(

        <>
            <tr ref={trRef}  >
               
                <td>
                    <Link
                        to={props.to}
                    >
                        <img src={props.item.medium_cover_image} alt="" />
                    </Link>
                </td>
                <td onClick={props.onclick}>
                    <Link
                        to={props.to}
                    >
                        <div onClick={props.onclick}>
                            <div>{props.item.title}</div>
                            <div>{props.item.synopsis}</div>
                        </div>
                    </Link>
                </td>
                <td>
                    <Link
                        to={props.to}
                    >
                        <div>
                            <div>{
                                genres.map((item, index) => {
                                    return <span key={index}>{item}<br /></span>
                                })
                            }
                            </div>
                            <div>{props.item.year}</div>
                            <div>&#9733; {props.item.rating} / 10</div>
                        </div>
                    </Link>
                </td>
                
            </tr>
        </>
    )
}

export default RowTableHome
