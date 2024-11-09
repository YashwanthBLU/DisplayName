import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const ValidateInput = (e) => {
    e.preventDefault();
    if (firstName.length > 0 && lastName.length > 0) {
      setFullName(firstName + " " + lastName);
    } else if (firstName.length === 0) {
      alert(`Please fill out this field`);
      setFullName("");
    } else if (lastName.length === 0) {
      alert(`Please fill out this field`);
      setFullName("");
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={ValidateInput}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {fullName.length > 0 && <label>Full Name: {fullName}</label>}
    </div>
  );
}

export default App;
