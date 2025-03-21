// const a = [1,2,3,4,5];
// const b = {
//     name: "Nikita",
//     section: "A", 
//     roll: 2345
// }

// function App(){
//     console.log({a});
//     console.log({b});
//     // [name, section, roll] = b;
//     return(
//         <>
//         {a.map((elem)=>
//             <h2>{elem}</h2>
//         )}
        
//             <h1>My name is {b.name}</h1>
//         </>
//     )
// };


function App() {
    const cars = ["BMW", "Audi", "Range Rover", "Mercedes"];
    
    return (
        <>
            <h1>Car Brands</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
            </ul>
        </>
    );
}


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function App() {
//   const val = arr.filter((elem) => elem % 2 === 0); // Define outside JSX

//   return (
//     <>
//       <h1>ES6 Array Iteration Methods</h1>
//       {val.map((elem)=><h3>{elem}</h3>)}
//     </>
//   );
// }

// export default App;

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);