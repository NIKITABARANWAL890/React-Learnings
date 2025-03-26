import React from "react";

class Moviecard extends React.Component {
    render() {
        const { movie, onIncreaseStar, onDecreaseStar, onToggleFav, onToggleCart } = this.props;
        const { title, plot, price, rating, starCount, fav, cart, src } = movie;

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img
                            alt="Poster"
                            src={src}
                        />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img
                                    className="str-btn"
                                    alt="minus"
                                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                    onClick={() => onDecreaseStar(movie)}
                                />
                                <img
                                    className="stars"
                                    alt="star"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                                />
                                <img
                                    className="str-btn"
                                    alt="plus"
                                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                                    onClick={() => onIncreaseStar(movie)}
                                />
                                <span className="starCount">{starCount}</span>
                            </div>
                            <button
                                className={fav ? "unfavourite-btn" : "favourite-btn"}
                                onClick={() => onToggleFav(movie)}
                            >
                                {fav ? "Unfavourite" : "Favourite"}
                            </button>
                            <button
                                className={cart ? "remove-cart-btn" : "cart-btn"}
                                onClick={() => onToggleCart(movie)}
                            >
                                {cart ? "Remove from cart" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Moviecard;
