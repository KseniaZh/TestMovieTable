import React from 'react';


function HomeFooter(props) {



    return(
        <div className={props.classname}>

            <div>downloaded movies: {props.counterDownloadedMovies}</div>
            
  

        </div>
    )
}

export default HomeFooter

