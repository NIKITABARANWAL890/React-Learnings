function handleToggle(){
    let btn = document.getElementsByTagName("button");
    btn[0].textContent = "Hide Element Below";
    document.getElementsByTagName("p")[0].style.visibility = "visible";
    toggleElem=false;
    RootElem.render(<App/>);
}

let toggleElem = true;

const App = () => (
    <>
        <h1>Coding Ninjas</h1>
        <button onClick = {toggleElem ? handleToggle: null}>Show Element Below</button>
        <p>Hello ninajs, I am here.</p>
    </>
);

const RootElem = ReactDOM.createRoot(document.getElementById("root"));
RootElem.render(<App/>);