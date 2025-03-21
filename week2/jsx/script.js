function sum(a, b){
    return a+b;
}

const header = <h2>JSX Expression.</h2>

function App(){
    const age = 21;
    const language = "Javascript";
    const answer = "false";
    return(
        <>
            <h1>Demo's basic info:</h1>
            {header}
            <p>My age is {age}.</p>
            <p>I like {language} a lot!</p>
            <p>Am i married?: {answer}</p>
            <p>Total value is {sum(9, 10)}</p>
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);