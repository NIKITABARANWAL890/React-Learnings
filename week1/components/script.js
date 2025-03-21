// function Header(){
//     return(
//         
//     );
// };

const Header = () =>(
    <>
        <h1>This is a header.</h1>
    </>
)
const App = () => (
        <>
        <h1>Hello React</h1>
        <ul>
        <li>React is single page application.</li>
        <li>React uses JSX.</li>
        <li>React is declerative.</li>
        </ul>
        </>
)

const Main = () =>(
    <>
        <Header/>
        <App/>
    </>
)
// ReactDOM.createRoot(document.getElementById("root")).render(<Header/>);
ReactDOM.createRoot(document.getElementById("root")).render(<Main/>);