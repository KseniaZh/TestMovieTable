import React from 'react';
import RowTableHome from '../../components/Home/RowTableHome';

function HomeMain(props) {

    return(
        <div className={props.classname}>

            <table >
                <tbody >
                    {
                        props.stateMainTable.map((item, index) => {
                            return <RowTableHome
                                        key={index}
                                        to={`/:${item['id']}`}
                                        id={item['id']}
                                        td_0={item['medium_cover_image']}
                                        td_1={item['title']}
                                        td_2={item['genres']}
                                        td_3={item["year"]}
                                        td_4={item['rating']}
                                        td_5={item['synopsis']}
                                        onclick={props.onclick}
                                    />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HomeMain


//"small_cover_image"
//"title"
//"year"
//"rating"
//"genres": ["Comedy", "Drama"],

//    "description_full": "Two neighbors, Justas and Povilas, are going fishing. The men set camp on a remote island and chat about stuff when the conversation unexpectedly turns into not only an intriguing story about their past, but also about life and death.",