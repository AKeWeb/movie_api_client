import { useEffect, useState } from "react";

import { MovieCard } from "../movie-card/movie-card"; 

import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://my-movie-app-2023-cc0ff9edd5d2.herokuapp.com/movies")
        .then((response) => response.json())
        .then ((data) => {
            const moviesFromApi = data.map((movie) => {
                return {
                    _id: movie._id,
                    Title: movie.Title,
                    Description: movie.Description,
                    Genre: {
                        Name: movie.Genre.Name,
                        Description: movie.Genre.Description
                    },
                    Director: {
                        Name: movie.Director.Name,
                        Bio: movie.Director.Bio,
                        Birth: movie.Director.Birth,
                        Death: movie.Director.Death
                    },
                    ImagePath: movie.ImagePath,
                    Featured: movie.Featured,
                    Year: movie.Year,
                    Rating: movie.Rating,
                    Actors: movie.Actors
                };
            });
            setMovies(moviesFromApi);
        })
        .catch((error) => {
            console.log("Error feching movies:", error);
        });
    }, []);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick = {() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The movie list is empty, sorry!</div>;
    }

    return (
        <div>
            {movies.map ((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};