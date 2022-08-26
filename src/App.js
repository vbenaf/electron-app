import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <form className="form">
        <label for="name">Name</label>
        <input name="name" />
        <label for="name">Surname</label>
        <input name="surname" />
        <label for="name">DNI</label>
        <input name="dni" />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default App;
