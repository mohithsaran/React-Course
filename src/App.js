const App = () => {
  const state = {
    name: "Mohith",
    age: 23,
  };
  return (
    <div>
      <center>
        <h2>Iam from App Component</h2>
        <h3>
          Hi this is {state.name} and age is {state.age}
        </h3>
      </center>
    </div>
  );
};

export default App;
