import "../css/MovieCard.css"
import myImage from '../images/johnwick.jpg';

function MovieCards({movie})
{
function onFavoriteClick()
{
    alert("clicked");
}

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={myImage} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                     ❤️
                    </button>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>


        </div>
    );
}

export default MovieCards