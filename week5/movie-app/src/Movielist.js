import React from "react";
import Moviecard from "./Moviecard";

class Movielist extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                {
                    title: "The Avengers",
                    plot: "Supernatural powers shown in the movie.",
                    price: 199,
                    rating: 8.9,
                    starCount: 0,
                    fav: false,
                    cart: false,
                    src:"https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
                },
                {
                    title: "Iron Man",
                    plot: "Supernatural powers shown in the movie.",
                    price: 199,
                    rating: 8.9,
                    starCount: 0,
                    fav: false,
                    cart: false,
                    src:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
                },
                {
                    title: "The Dark Knight",
                    plot: "Supernatural powers shown in the movie.",
                    price: 199,
                    rating: 8.9,
                    starCount: 0,
                    fav: false,
                    cart: false,
                    src:"https://upload.wikimedia.org/wikipedia/id/thumb/a/af/Batman_Begins_Poster.jpg/220px-Batman_Begins_Poster.jpg"
                },
            ],
        };
    }

    handleIncStar = (movie) => {
        this.setState((prevState) => {
            const updatedMovies = prevState.movies.map((m) => {
                if (m === movie) {
                    return { ...m, starCount: Math.min(m.starCount + 0.5, 5) };
                }
                return m;
            });
            return { movies: updatedMovies };
        });
    };

    handleDecStar = (movie) => {
        this.setState((prevState) => {
            const updatedMovies = prevState.movies.map((m) => {
                if (m === movie) {
                    return { ...m, starCount: Math.max(m.starCount - 0.5, 0) };
                }
                return m;
            });
            return { movies: updatedMovies };
        });
    };

    handleToggleFav = (movie) => {
        this.setState((prevState) => {
            const updatedMovies = prevState.movies.map((m) => {
                if (m === movie) {
                    return { ...m, fav: !m.fav };
                }
                return m;
            });
            return { movies: updatedMovies };
        });
    };

    handleToggleCart = (movie) => {
        this.setState((prevState) => {
            const updatedMovies = prevState.movies.map((m) => {
                if (m === movie) {
                    return { ...m, cart: !m.cart };
                }
                return m;
            });
            return { movies: updatedMovies };
        });
    };

    render() {
        const { movies } = this.state;
        return (
            <>
                {movies.map((movie, index) => (
                    <Moviecard
                        key={index}
                        movie={movie}
                        onIncreaseStar={this.handleIncStar}
                        onDecreaseStar={this.handleDecStar}
                        onToggleFav={this.handleToggleFav}
                        onToggleCart={this.handleToggleCart}
                    />
                ))}
            </>
        );
    }
}

export default Movielist;
