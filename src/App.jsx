import { useState } from "react";
import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import ToggleSection from "./components/ToggleSection";
import DisplayContactInfo from "./components/DisplayContactInfo";
import Education from "./components/Education";
import ProfessionalExp from "./components/ProfessionalExp";

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

  const [contactInfoVisible, setContactInfoVisible] = useState(false);

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

  // For Professional Experience Form //
  const [isProfExVisible, setIsProfExVisible] = useState(true);

  function toggleProfEx() {
    setIsProfExVisible((isProfExVisible) => !isProfExVisible);
  }

  const [profExInput, setProfExInput] = useState({
    jobTitle: "Full Stack Developer",
    company: "Very Good Coding",
    location: "Durham, NC",
    startDate: "2008-09",
    endDate: "2017-10",
  });
  const [professionalSum, setProfessionalSum] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus et officiis odit architecto delectus possimus non reiciendis earum, corporis animi. Quam et nostrum maxime! Asperiores officiis cumque reprehenderit sed."
  );
  const [profExList, setProfExList] = useState([]);
  const [bulletPoint, setBulletPoint] = useState("");
  const [bulletPointList, setBulletPointList] = useState([]);
  const [isProfExEditing, setisProfExEditing] = useState(false);
  const [profExId, setProfExId] = useState(null);

  function handleProfessionalSum(e) {
    setProfessionalSum(e.target.value);
  }

  function handleProfExChange(e) {
    const { name, value } = e.target;

    setProfExInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleBulletPointChange(e) {
    setBulletPoint(e.target.value);
  }

  function addProfExp(e) {
    e.preventDefault();

    if (
      profExInput.jobTitle.trim() === "" ||
      profExInput.company.trim() === "" ||
      profExInput.location.trim() === "" ||
      profExInput.startDate.trim() === "" ||
      profExInput.endDate.trim() === ""
    ) {
      return;
    } else if (isProfExEditing) {
      setProfExList((prevProfExList) =>
        prevProfExList.map((profEx) =>
          profEx.id
            ? { ...profExInput, bulletPoints: bulletPointList, id: profExId }
            : profEx
        )
      );
      setisProfExEditing(false);
      setProfExId(null);
      setProfExInput({
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
      });
      setBulletPointList([]);
    } else {
      setProfExList((prevExList) => [
        ...prevExList,
        {
          ...profExInput,
          bulletPoints: bulletPointList,
          id: crypto.randomUUID(),
        },
      ]);
      setProfExInput({
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
      });
      setBulletPointList([]);
    }
  }

  function editProfEx(id, e) {
    e.preventDefault();

    const profExToEdit = profExList.find((profEx) => profEx.id === id);

    console.log(profExToEdit);

    if (profExToEdit) {
      setisProfExEditing(true);
      setProfExInput(profExToEdit);
      setBulletPointList(profExToEdit.bulletPoints);
      setProfExId(id);
    }
  }

  function removeProfEx(id) {
    setProfExList((prevProfExList) =>
      prevProfExList.filter((list) => list.id !== id)
    );

    setProfExInput({
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
    });

    setBulletPoint("");
    setBulletPointList([]);
  }

  function addBulletPoint(e) {
    e.preventDefault();

    if (bulletPoint.trim() === "") {
      return;
    }

    setBulletPointList((prevBulletPointList) => [
      ...prevBulletPointList,
      { text: bulletPoint.trim(), id: crypto.randomUUID() },
    ]);

    setBulletPoint("");
  }

  function removeBullet(id, e) {
    e.preventDefault();

    setBulletPointList((prevBulletPointList) =>
      prevBulletPointList.filter((bullet) => bullet.id !== id)
    );
    setBulletPoint("");
  }

  // For EDU Form //
  const [eduInfoVisible, setEduInfoVisible] = useState(false);
  const [eduInput, setEduInput] = useState({
    degree: "B.A. Mathematics",
    institution: "University of North Carolina at Chapel Hill",
    cityState: "Chapel Hill, NC",
    startDate: "2008-08",
    endDate: "2012-05",
  });
  const [eduIsEditing, setEduIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function toggleEduInfo() {
    setEduInfoVisible((eduInfoVisible) => !eduInfoVisible);
  }

  function handleEduChange(e) {
    const { name, value } = e.target;

    setEduInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const [eduList, setEduList] = useState([]);

  function addEducation(e) {
    e.preventDefault;

    if (
      !eduInput.degree.trim() ||
      !eduInput.institution.trim() ||
      !eduInput.cityState.trim() ||
      !eduInput.startDate.trim() ||
      !eduInput.endDate.trim()
    ) {
      return;
    }
    if (eduIsEditing) {
      setEduList((prevEduList) =>
        prevEduList.map((edu) => (edu.id ? { ...eduInput, id: editId } : edu))
      );
      setEduIsEditing(false);
      setEditId(null);
      setEduInput({
        degree: "",
        institution: "",
        cityState: "",
        startDate: "",
        endDate: "",
      });
    } else {
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
  }

  function editEdu(id, e) {
    e.preventDefault();
    const eduToEdit = eduList.find((edu) => edu.id === id);

    if (eduToEdit) {
      setEduInput(eduToEdit);
      setEduIsEditing(true);
      setEditId(id);
    }
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
  const [skillInput, setSkillInput] = useState("");
  const [skillsList, setSkillsList] = useState([
    { name: "React.js", id: crypto.randomUUID() },
    { name: "Javascript", id: crypto.randomUUID() },
    { name: "CSS", id: crypto.randomUUID() },
    { name: "HTML5", id: crypto.randomUUID() },
    { name: "Webpack", id: crypto.randomUUID() },
    { name: "Vite", id: crypto.randomUUID() },
  ]);
  const [isSkillEditing, setIsSkillEditing] = useState(false);
  const [skillId, setSkillId] = useState(null);

  function toggleSkills() {
    setSkillsVisible((skillsVisible) => !skillsVisible);
  }

  function handleSkillChange(e) {
    setSkillInput(e.target.value);
  }

  function addNewSkill(e) {
    e.preventDefault();

    if (isSkillEditing) {
      setSkillsList((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === skillId ? { ...skill, name: skillInput.trim() } : skill
        )
      );
      setSkillId(null);
      setIsSkillEditing(false);
    } else if (skillInput.trim() !== "") {
      setSkillsList((currentSkills) => [
        ...currentSkills,
        { name: skillInput.trim(), id: crypto.randomUUID() },
      ]);
    }
    setSkillInput("");
  }

  function editSkill(id, e) {
    e.preventDefault();
    const skillToEdit = skillsList.find((skill) => skill.id === id);
    if (skillToEdit) {
      setIsSkillEditing(true);
      setSkillId(id);
      setSkillInput(skillToEdit.name);
    }
  }

  function removeSkill(id, e) {
    e.preventDefault();
    e.stopPropagation();

    if (skillId === id) {
      setSkillInput("");
      setIsSkillEditing(false);
    }
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
            isVisible={contactInfoVisible}
            toggleVisibility={toggleContactInfo}
          >
            <ContactInfo
              formData={contactFormData}
              handleChange={handleContactChange}
            />
          </ToggleSection>
          <ToggleSection
            title="Professional Experience: "
            isVisible={isProfExVisible}
            toggleVisibility={toggleProfEx}
          >
            <ProfessionalExp
              profExInput={profExInput}
              professionalSum={professionalSum}
              handleBulletPointChange={handleBulletPointChange}
              handleProfExChange={handleProfExChange}
              handleProfessionalSum={handleProfessionalSum}
              addBulletPoint={addBulletPoint}
              addProfExp={addProfExp}
              removeBullet={removeBullet}
              removeProfEx={removeProfEx}
              editProfEx={editProfEx}
              bulletPoint={bulletPoint}
              bulletPointList={bulletPointList}
              isProfExEditing={isProfExEditing}
              profExList={profExList}
            />
          </ToggleSection>
          <ToggleSection
            title="Education: "
            isVisible={eduInfoVisible}
            toggleVisibility={toggleEduInfo}
          >
            <Education
              handleChange={handleEduChange}
              removeEdu={removeEdu}
              eduList={eduList}
              eduInput={eduInput}
              addEducation={addEducation}
              editEdu={editEdu}
              eduIsEditing={eduIsEditing}
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
              editSkill={editSkill}
              isSkillEditing={isSkillEditing}
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
