const Login = () =>(
    <>
        <h1>Login to Continue</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
    </>
);

const Home = () =>(
    <>
        <h1>Welcome to home!</h1>
        <p>Enjoy this catalog of pictures</p>
        <div className="cars">
            <img src = "https://images.carandbike.com/car-images/colors/mercedes-benz/eqs/mercedes-benz-eqs-sodalite-blue.jpg?v=1664535361" />
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-g6tuWWtexQzFlKpYkWP4QbXIxf8wMiUIQ&s" />
            <img src = "https://www.autobest.co.in/uploads/car/audi-a6-45-tfsi-techno-263866658185.jpeg"/>
            <img src = "https://assets.autobuzz.my/wp-content/uploads/2021/06/28153233/2021-BMW-Japan-840i-Frozen-Black-10.jpg"/>
        </div>
    </>
);

function App(){
    let loginStatus = true;
    return(
        <>
            {loginStatus?<Home/>:<Login/>}
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);