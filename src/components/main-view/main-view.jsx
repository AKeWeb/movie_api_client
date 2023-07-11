import { useState } from "react";

import { MovieCard } from "../movie-card/movie-card"; 

import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovies] = useState([
        {
        id: 1,
        Title:"John Wick: Chapter 4",
        Description:"John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        Genre:
            {
                Name:"Action",
                Description:"Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work."
            },
        Director:
            {
                Name:"Chad Stahelski",
                Bio:"Chad Stahelski is an American stuntman and film director. He directed the 2014 film John Wick and its three sequels. He has worked as a stuntman, stunt coordinator and second unit director on several films.",
                Birth:"1968-09-20",
                Death:""
            },
        ImagePath:"../public/img/John-Wick-Chapter-4.png",
        Featured:false,
        Year: "2023",
        Rating:"7.9",
        Actors:["Keanu Reeves","Scott Adkins"]
        },

        {
        id:2,
        Title:"Killers of the Flower Moon",
        Description:"Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s, sparking a major F.B.I. investigation involving J. Edgar Hoover.",
        Genre:
            {
            Name:"Crime",
            Description:"As the name implies, the crime genre is largely classified by a story that is centered around the solving of a crime. The story needs a protagonist, usually some type of detective, whether a professional or an amateur or even a private investigator, who is determined to solve the crime."
            },
        Director:
            {
            Name:"Martin Scorsese",
            Bio:"This Bio is now up-to-date",
            Birth:"1942-11-17",
            Death:""
            },
        ImagePath:"../public/img/Killers-of-the-Flower-Moon.png",
        Featured:false,
        Year:"2023",
        Rating:"9.3",
        Actors:["Leonardo DiCaprio","Lily Gladstone"]
        },

        {
        id: 3,
        Title:"Spider-Man: Across the Spider-Verse",
        Description:"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
        Genre:
            {
            Name:"Animation",
            Description:"An animated movie or cartoon, is made up of a series of slightly different drawings of people, animals, and objects that make them appear to move."
            },
        Director:
            {
            Name:"Joaquim Dos Santos",
            Bio:"Joaquim Aranha dos Santos is a Portuguese-American animator, storyboard artist, director, producer, and writer. He is best known for his directing work on the television series Justice League Unlimited, Avatar: The Last Airbender, G.I. Joe: Resolute, The Legend of Korra, and Voltron: Legendary Defender.",Birth:"1977-6-22",
            Death:""},
        ImagePath: "../public/img/Spider-Man-Across-the-Spider-Verse.png",Featured:false,
        Year:"2023",
        Rating:"9.0",
        Actors:["Oscar Isaac","Shameik Moore"]
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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