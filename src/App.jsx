import { useState } from "react";
import "./App.css";

function ContactInfo({
  firstName,
  lastName,
  phone,
  handleFirstName,
  handleLastName,
  handlePhone,
}) {
  return (
    <>
      <h3>Contact Information</h3>
      <form>
        <label htmlFor="firstName">
          First Name:
          <input type="text" value={firstName} onChange={handleFirstName} />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <input type="text" value={lastName} onChange={handleLastName} />
        </label>
        <label htmlFor="phone">
          Last Name:
          <input type="text" value={phone} onChange={handlePhone} />
        </label>
      </form>
    </>
  );
}

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <div className="main-container">
      <div className="input-side">
        <h1>Resume Builder</h1>
        <ContactInfo
          firstName={firstName}
          lastName={lastName}
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
        />
      </div>
      <div className="output-side">
        <h1>Output Side</h1>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{phone}</h3>
      </div>
    </div>
  );
}
