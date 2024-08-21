import { useState } from "react";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import ToggleSection from "./components/ToggleSection";
import DisplayContactInfo from "./components/DisplayContactInfo";
import Education from "./components/Education";

export default function App() {
  // For Contact Form //
  const [contactFormData, setContactFormData] = useState({
    firstName: "Matilda",
    lastName: "Johnson",
    email: "tildy@email.com",
    phone: "(123) 456-7890",
    city: "Skyline",
    state: "AK",
    zip: "00090",
  });

  const [contactInfoVisible, setContactInfoVisible] = useState(true);

  function toggleContactInfo() {
    setContactInfoVisible((contactInfoVisible) => !contactInfoVisible);
  }

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // For EDU Form //
  const [eduInfoVisible, setEduInfoVisible] = useState(false);

  function toggleEduInfo() {
    setEduInfoVisible((eduInfoVisible) => !eduInfoVisible);
  }

  const [eduInput, setEduInput] = useState({
    degree: "B.A. Mathematics",
    institution: "University of North Carolina at Chapel Hill",
    cityState: "Chapel Hill, NC",
    startDate: "2008-08",
    endDate: "2012-05",
  });

  function handleEduChange(e) {
    const { name, value } = e.target;

    setEduInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [eduList, setEduList] = useState([]);

  function addEducation(e) {
    e.preventDefault();

    setEduList((prevEduList) => [
      ...prevEduList,
      { ...eduInput, id: crypto.randomUUID() },
    ]);

    setEduInput({
      degree: "",
      institution: "",
      cityState: "",
      startDate: "",
      endDate: "",
    });
  }

  function removeEdu(id) {
    setEduList((prevEduList) => prevEduList.filter((edu) => edu.id !== id));
    setEduInput({
      degree: "",
      institution: "",
      cityState: "",
      startDate: "",
      endDate: "",
    });
  }

  // For Skills Form //
  const [skillsVisible, setSkillsVisible] = useState(false);

  function toggleSkills() {
    setSkillsVisible((skillsVisible) => !skillsVisible);
  }

  const [skillInput, setSkillInput] = useState("");
  const [skillsList, setSkillsList] = useState([
    { name: "React.js", id: crypto.randomUUID() },
    { name: "Javascript", id: crypto.randomUUID() },
    { name: "CSS", id: crypto.randomUUID() },
    { name: "HTML5", id: crypto.randomUUID() },
    { name: "Webpack", id: crypto.randomUUID() },
    { name: "Vite", id: crypto.randomUUID() },
  ]);

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
        <div className="forms-wrapper">
          <ToggleSection
            title="Contact Information: "
            className="contact-info"
            isVisible={contactInfoVisible}
            toggleVisibility={toggleContactInfo}
          >
            <ContactInfo
              formData={contactFormData}
              handleChange={handleContactChange}
            />
          </ToggleSection>
          <ToggleSection
            title="Education: "
            className="education-info"
            isVisible={eduInfoVisible}
            toggleVisibility={toggleEduInfo}
          >
            <Education
              handleChange={handleEduChange}
              removeEdu={removeEdu}
              eduList={eduList}
              eduInput={eduInput}
              addEducation={addEducation}
            />
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
        </div>{" "}
      </div>
      <div className="output-side">
        <div className="paper-container">
          <DisplayContactInfo
            formData={contactFormData}
            handleChange={handleContactChange}
          />
        </div>
      </div>
    </div>
  );
}
