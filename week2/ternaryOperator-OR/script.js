
function App(){
    let loggedIn = true;
    let name = "Alexa";
    let lastname = "Diaz";

    return(
        <>
            <h1>Hello {loggedIn ? lastname || name : "User"}!</h1>
            {loggedIn && <p>Welcome to the portal</p>}
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

