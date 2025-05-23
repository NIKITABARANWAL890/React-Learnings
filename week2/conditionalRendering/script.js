function Student() {
    const students = [
        { name: "Alexa", age: 10, marks: 35 },
        { name: "Siri", age: 12, marks: 40 },
        { name: "Google", age: 20, marks: 100 },
    ];

    return (
        <>
            <h1>Rendering student details through table.</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.name}</td>
                            <td>{elem.age}</td>
                            <td>{elem.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function Car(){
    const cars = [
        {
            name: "BMW",
            color: "Black",
            img:"https://assets.autobuzz.my/wp-content/uploads/2021/06/28153233/2021-BMW-Japan-840i-Frozen-Black-10.jpg",
        },
        {
            name: "Audi",
            color:"White",
            img:"https://www.autobest.co.in/uploads/car/audi-a6-45-tfsi-techno-263866658185.jpeg",
        },
        {
            name: "Ferrari",
            color: "yellow",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-g6tuWWtexQzFlKpYkWP4QbXIxf8wMiUIQ&s",
        },
        {
            name: "Mercedes",
            color: "Blue",
            img:"https://images.carandbike.com/car-images/colors/mercedes-benz/eqs/mercedes-benz-eqs-sodalite-blue.jpg?v=1664535361",
        },
    ];
    
    return(
        <>
            <h1>Card details</h1>
            <table border="1">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car, index)=>
                        <tr key={index}>
                        <td>{car.name}</td>
                        <td>{car.color}</td>
                        <td><img src={car.img} height="60px" width="100px"/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
};

function App(){
    let showCards = true;
    if(showCards){
        return(
            <>
            <Car/>
            {showCards && <h1>Car model is being is diplayed.</h1>}
            </>
        )
    }else{
        return(
            <Student/>
        )
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

