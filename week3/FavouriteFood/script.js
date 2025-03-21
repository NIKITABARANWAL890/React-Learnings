const foodData = [
    {
        name: "Pizza",
        img: "https://static.toiimg.com/photo/51089680.cms",
    },
    {
        name: "Burger",
        img: "https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg",
    },
    {
        name: "Pasta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCsNQJxG5zy8ScNn5KbnnmgzPB_Stz3QGRg&s",
    },
    {
        name: "Sushi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTrKVqF4xDJt2YFfPSa0WZX1KjZZ_yAGJ9w&s",
    },
    {
        name: "Cake",
        img: "https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg",
    },
];

let favouriteFood = null;

function showFavouriteFood(food) {
    console.log("Card clicked:", food.name);
    favouriteFood = food;
    RootElem.render(<App />);
}

function ShowFavouriteFood({ name, img }) {
    return (
        <div className="food-cards">
            <div className="food-card">
                <h1>{name}</h1>
                <img src={img} alt={name} />
            </div>
        </div>
    );
}

const App = () => (
    <>
        {favouriteFood && <ShowFavouriteFood name={favouriteFood.name} img={favouriteFood.img} />}
        <h1>Select your favourite food.</h1>
        <div className="food-cards">
            {foodData.map((elem, index) => (
                <div className="food-card" key={index} onClick={() => showFavouriteFood(elem)}>
                    <h1>{elem.name}</h1>
                    <img src={elem.img} alt={elem.name} />
                </div>
            ))}
        </div>
    </>
);

const RootElem = ReactDOM.createRoot(document.getElementById("root"));
RootElem.render(<App />);
