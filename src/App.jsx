import { useState } from "react";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import DisplayContactInfo from "./components/DisplayContactInfo";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="main-container">
      <div className="input-side">
        <h1>Resume Builder</h1>
        <ContactInfo formData={formData} handleChange={handleChange} />
      </div>
      <div className="output-side">
        <DisplayContactInfo formData={formData} handleChange={handleChange} />
      </div>
    </div>
  );
}
