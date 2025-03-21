let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = "";
let inputRef = React.createRef();  // Create a ref for the comment input

function increaseScore(num) {
    if (wicket < 10) {
        hit = num === 0 ? "." : num;
        RootElem.render(<App />);
    }
}

function increaseWicket() {
    if (wicket < 10) {
        wicket += 1;
        hit = "W";
        RootElem.render(<App />);
    }
}

function onSubmitHandler(event) {
    event.preventDefault();

    let comment = inputRef.current.value;  // Get value using ref

    if (hit === "") return;  // Prevent submitting empty scores

    ballWiseRes.unshift(
        <span>{`${hit}, ${comment}`}</span>
    );

    if (hit !== "." && hit !== "W") score += Number(hit);

    hit = "";
    inputRef.current.value = "";  // Clear input field
    RootElem.render(<App />);
}

const ScoreButtons = () => (
    <div className="score-btns">
        {[0, 1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="btn" onClick={() => increaseScore(num)}>
                {num}
            </div>
        ))}
        <div className="btn wicket" onClick={increaseWicket}>Wicket</div>
    </div>
);

const Form = () => (
    <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Score" id="score-box" value={hit} readOnly />
        <input type="text" placeholder="Write a comment" ref={inputRef} />  
        <button>Submit</button>
    </form>
);

function App() {
    return (
        <div className="container">
            <h1>SCORE KEEPER</h1>
            <h2>Score: {score}/{wicket}</h2>
            <ScoreButtons />
            <Form />
            <hr />
            {ballWiseRes.map((elem, index) => (
                <p key={index}>{elem}</p>
            ))}
        </div>
    );
}

const RootElem = ReactDOM.createRoot(document.getElementById("root"));
RootElem.render(<App />);
