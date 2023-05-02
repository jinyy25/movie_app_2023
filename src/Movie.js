import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
import "./Home.css";
//객체 내용 체계화
//화면에 load
//genre의 경우 map 각 item에 key가 필요
function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title" style={{color:"blanchedalmond"}}>{title}</h3>                 
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {
                        genres.map((genres, index) => 
                            <li key={index} className="genres__genre">{genres}
                        </li>)
                    }
                </ul>
                <p className="movie__summary">{summary.slice(0,200)}...</p>
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
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired      
};  

export default Movie;
