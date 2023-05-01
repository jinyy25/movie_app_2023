import React from "react";
import propTypes from "prop-types";
import "./Movie.css";

//객체 내용 체계화
//화면에 load
function Movie({id, year, title, summary, poster}){
    return (
        <div className="movie">
            <img src={poster} alt={title}></img>
            <div className="movie_data">
                {/* <h3 className="movie_title" style={{color:"blue"}}>{title}</h3> */}
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>       
    );
}

//type 검사
Movie.propTypes= {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,    
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired  
};  

export default Movie;
