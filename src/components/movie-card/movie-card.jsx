import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick}) => {
    return (
       <div> 
        <div  onClick = {() => {
                onMovieClick(movie);
            }}
        >
            <img className="movieImageCard" src={movie.ImagePath} />
        </div>
        
        <div 
            onClick = {() => {
                onMovieClick(movie);
            }}
        >
            <span>Title:</span>
            <span>{movie.Title}</span>       
        </div>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape ({
            Name: PropTypes.string,
            Description: PropTypes.string
        }).isRequired,
        Director: PropTypes.shape ({
            Name: PropTypes.string,
            Bio: PropTypes.string,
            Birth: PropTypes.instanceOf(Date),
            Death: PropTypes.instanceOf(Date)
        }).isRequired,
        ImagePath: PropTypes.string.isRequired,
        Featured: PropTypes.bool.isRequired,
        Year: PropTypes.instanceOf(Date),
        Actors: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};