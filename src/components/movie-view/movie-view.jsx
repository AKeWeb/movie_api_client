export const MovieView = ( {movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img className="movieImage" src={movie.ImagePath} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Description:</span>
                <span>{movie.Description}</span>
            </div>
          <div>
                <span>Genre:</span>
                <span>{movie.Genre.Name}</span>
            </div>
            <div>
                <span>Genre Description:</span>
                <span>{movie.Genre.Description}</span>
            </div>
            <div>
                <span>Director:</span>
                <span>{movie.Director.Name}</span>
            </div>
            <div>
                <span>Director Bio:</span>
                <span>{movie.Director.Bio}</span>
            </div>
            <div>
                <span>Director's date of birth:</span>
                <span>{movie.Director.Birth}</span>
            </div>
            <div>
                <span>Director's date of death:</span>
                <span>{movie.Director.Death}</span>
            </div>
            <div>
                <span>Featured:</span>
                <span>{movie.Featured}</span>
            </div>
            <div>
                <span>Year of release:</span>
                <span>{movie.Year}</span>
            </div>
            <div>
                <span>Movie Rating:</span>
                <span>{movie.Rating}</span>
            </div>
            <div>
                <span>Main Actors:</span>
                <span>{movie.Actors}</span>
            </div>
        <button onClick={onBackClick}>Back to main view</button>
        </div>
    );
};