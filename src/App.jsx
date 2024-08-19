import { useState } from "react";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import ToggleSection from "./components/ToggleSection";
import DisplayContactInfo from "./components/DisplayContactInfo";

export default function App() {
  // For Contact Form //
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    skills: "",
  });

  const [contactInfoVisible, setContactInfoVisible] = useState(true);

  function toggleContactInfo() {
    setContactInfoVisible((contactInfoVisible) => !contactInfoVisible);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // For Skills Form //
  const [skillsVisible, setSkillsVisible] = useState(true);

  function toggleSkills() {
    setSkillsVisible((skillsVisible) => !skillsVisible);
  }

  const [skillInput, setSkillInput] = useState("");
  const [skillsList, setSkillsList] = useState([]);

  function handleSkillChange(e) {
    setSkillInput(e.target.value);
  }

  function addNewSkill(e) {
    e.preventDefault();
    if (skillInput.trim() !== "") {
      setSkillsList((currentSkills) => [
        ...currentSkills,
        { name: skillInput.trim(), id: crypto.randomUUID() },
      ]);
    }
    setSkillInput("");
  }

  function removeSkill(id) {
    setSkillsList((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== id)
    );
  }

  return (
    <div className="main-container">
      <div className="input-side">
        <p className="site-title">resume builder</p>
        <ToggleSection
          title="Contact Information: "
          className="contact-info"
          isVisible={contactInfoVisible}
          toggleVisibility={toggleContactInfo}
        >
          <ContactInfo formData={contactFormData} handleChange={handleChange} />
        </ToggleSection>
        <ToggleSection
          title="Skills: "
          className="skills-inputs"
          isVisible={skillsVisible}
          toggleVisibility={toggleSkills}
        >
          <Skills
            skillsList={skillsList}
            skillInput={skillInput}
            handleSkillChange={handleSkillChange}
            addNewSkill={addNewSkill}
            removeSkill={removeSkill}
          />
        </ToggleSection>
      </div>
      <div className="output-side">
        <div className="paper-container">
          <DisplayContactInfo
            formData={contactFormData}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
