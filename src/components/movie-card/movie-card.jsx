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