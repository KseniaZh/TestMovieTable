import React, { useEffect, useState} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import {
    rememberIdMovie,
    startMovieDetails_GET_RequestServer,
    getRequestServerMovieDetails,
} from '../../store/MovieDetails/actionsMovieDetails';
import {
    startCommentsMovie_GET_RequestServer
} from '../../store/CommentsMovie/actionsCommentsMovie';
import CommentsMovie from '../../components/PageId/CommentsMovie';
import ButtonLink from '../../UI/Buttons/ButtonLink';
import Button from '../../UI/Buttons/Button';


function PageId(props) {

    const dispatch = useDispatch();

    const stateMovieDetails = useSelector(state => state.stateMovieDetails.movieDetails.data.movie);
   
    const pathHome = '/';

    let { id } = useParams();

    const [openComments, setOpenComments] = useState(false);

    const hendlerOpenComments = () => {
        dispatch(rememberIdMovie(id));
        dispatch(startCommentsMovie_GET_RequestServer());
        setOpenComments(prev => !prev);
    };
    const hendlerGoHome = () => {
        let movieDetailsNull = {data: {
                movie: { background_image: '' }
            },
        };
        dispatch(getRequestServerMovieDetails(movieDetailsNull));
    }

    useEffect(() => {
        dispatch(rememberIdMovie(id));
        dispatch(startMovieDetails_GET_RequestServer());
    }, []);

    return (
        <div className='pageIdWrapper' >
            <div style={{ 'backgroundImage': `url(${stateMovieDetails["background_image"]})`, 'backgroundSize': "cover"}}>
                <div>
                    <div> <img src={stateMovieDetails.large_cover_image} alt={stateMovieDetails.title} /></div>
                    <div>
                        <div>{stateMovieDetails.title}</div>
                        <div>{stateMovieDetails.year}</div>
                        <div>{stateMovieDetails.genres}</div>
                        <div>rating: {stateMovieDetails.rating}</div>
                        <div>runtime: {stateMovieDetails.runtime}</div>
                        <div>{stateMovieDetails.description_full}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Movie comments</div>
                        <Button
                            name={openComments ? 'Open' : "Close"}
                            onclick={hendlerOpenComments}
                            classname='openCommentsMovie'
                        />
                    </div>
                    {
                        openComments ?
                            <CommentsMovie />
                            :null
                    }
                    
                </div>
                < ButtonLink
                    to = { pathHome }
                    classnameButtonLink='pageId_Button_GoHome'
                    onclick={hendlerGoHome}
                    icon = 'fa-sign-out'
                    name= '&#215;'
                />

            </div>
        </div>
    )
}

export default connect()(PageId)

    //background_image: "https://yts.mx/assets/images/movies/on_the_fringe_of_wild_2021/background.jpg"
    //background_image_original: "https://yts.mx/assets/images/movies/on_the_fringe_of_wild_2021/background.jpg"
    //description_full: "Early 2000s. A small, northern Ontario town. Canada. Peter, a sensitive and shy teen, dreams of leaving his small northern Ontario town to pursue life as an artist, but his homophobic father intends to 'make him a man' instead. Forcing him on a hunting trip one cold winter break, tensions run high and Peter runs away. Lost, cold and reaching his breaking point, Peter meets Jack, who's also desperate to escape his toxic family situation. A romance quickly develops between the two teenage boys as they hide away in a secluded cabin, discovering each other and themselves. But the world outside eventually pulls them back and they're forced to face the circumstances they tried to flee, which will ultimately tear them apart. —S.C./E.C."
    //description_intro: "Early 2000s. A small, northern Ontario town. Canada. Peter, a sensitive and shy teen, dreams of leaving his small northern Ontario town to pursue life as an artist, but his homophobic father intends to 'make him a man' instead. Forcing him on a hunting trip one cold winter break, tensions run high and Peter runs away. Lost, cold and reaching his breaking point, Peter meets Jack, who's also desperate to escape his toxic family situation. A romance quickly develops between the two teenage boys as they hide away in a secluded cabin, discovering each other and themselves. But the world outside eventually pulls them back and they're forced to face the circumstances they tried to flee, which will ultimately tear them apart. —S.C./E.C."
    //download_count: 1515
    //genres: (2)['Drama', 'Romance']
    //id: 36645
    //imdb_code: "tt11464430"
    //language: "en"
    //large_cover_image: "https://yts.mx/assets/images/movies/on_the_fringe_of_wild_2021/large-cover.jpg"
    //like_count: 0
    //medium_cover_image: "https://yts.mx/assets/images/movies/on_the_fringe_of_wild_2021/medium-cover.jpg"
    //mpa_rating: ""
    //rating: 8.6
    //runtime: 83
    //slug: "on-the-fringe-of-wild-2021"
    //small_cover_image: "https://yts.mx/assets/images/movies/on_the_fringe_of_wild_2021/small-cover.jpg"
    //title: "On the Fringe of Wild"
    //title_english: "On the Fringe of Wild"
    //title_long: "On the Fringe of Wild (2021)"
    //torrents: (2)[{ … }, { … }]
    //url: "https://yts.mx/movies/on-the-fringe-of-wild-2021"
    //year: 2021
    //yt_trailer_code: ""



