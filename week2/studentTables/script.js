function App() {
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

// Render the App component
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
