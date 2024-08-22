import { useState } from "react";

export default function ProfessionalExp() {
  const [profExInput, setProfExInput] = useState({
    profSummary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, voluptatem odio voluptate in omnis sapiente aspernatur nam fugiat unde consequuntur cumque dicta suscipit provident maxime excepturi labore quibusdam dolor. Nobis?",
    jobTitle: "Full Stack Developer",
    company: "Very Good Building",
    location: "Durham, NC",
  });
  const [profExList, setProfExList] = useState([]);
  const [bulletPoint, setBulletPoint] = useState("");
  const [bulletPointList, setBulletPointList] = useState([]);

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

    setProfExList((prevExList) => [
      ...prevExList,
      { ...profExInput, id: crypto.randomUUID() },
    ]);
  }

  function formatDate(date) {
    const [year, month] = date.split("-");

    return `${month}/${year}`;
  }

  const profSummary = {
    name: "profSummary",
    id: crypto.randomUUID(),
    type: "textarea",
    display: "Professional Summary: ",
  };

  const bulletPoints = {
    name: "bulletPoints",
    id: crypto.randomUUID(),
    type: "text",
    display: "Job Responsibilities: ",
  };

  const profInputFields = [
    {
      name: "jobTitle",
      id: crypto.randomUUID(),
      type: "text",
      display: "Job Title: ",
    },
    {
      name: "company",
      id: crypto.randomUUID(),
      type: "text",
      display: "Company: ",
    },
    {
      name: "location",
      id: crypto.randomUUID(),
      type: "text",
      display: "Location: ",
    },
    {
      name: "startDate",
      id: crypto.randomUUID(),
      type: "month",
      display: "Start Date: ",
    },
    {
      name: "endDate",
      id: crypto.randomUUID(),
      type: "month",
      display: "End Date: ",
    },
  ];

  return (
    <>
      <form className="prof-exp-inputs">
        <div
          key={profSummary.id}
          className={`input-wrapper ${profSummary.name}`}
        >
          <label
            key={profSummary.id}
            htmlFor={profSummary.name}
            className="input-label"
          >
            {profSummary.display}
          </label>{" "}
          <textarea
            className={profSummary.name}
            id={profSummary.id}
            value={profExInput[profSummary.name]}
          ></textarea>{" "}
        </div>
        <hr />
        {profInputFields.map((field) => (
          <div key={field.id} className={`input-wrapper ${field.name}`}>
            <label key={field.id} htmlFor={field.name} className="input-label">
              {field.display}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.id}
              onChange={() => {
                handleProfExChange(e);
              }}
              value={profExInput[field.name]}
            />
          </div>
        ))}
        <div className={`input-wrapper ${bulletPoints.name}`}>
          <label key={bulletPoints.id} className="input-label">
            {bulletPoints.display}
          </label>
          <div className="bullet-point-wrapper">
            <input type={bulletPoints.type}></input>{" "}
            <button className="add-btn">Add</button>
          </div>
          <button
            className="add-btn"
            onClick={() => {
              addProfExp(e);
            }}
          >
            Add Work Experience
          </button>
        </div>
        <div className="profEx-container">
          {profExList.map((profEx) => (
            <div className="profEx-item" id={profEx.id} key={profEx.id}>
              <span className="edu-degree-delete-btn">
                <p className="edu-degree edu-entry">{profEx.degree}</p>
                <div className="edit-remove-btns">
                  <button
                    className="edit-btn"
                    // onClick={(e) => editEdu(edu.id, e)}
                  >
                    <img
                      src="src/assets/edit-3-svgrepo-com.svg"
                      alt="close"
                      width="15px"
                      height="15px"
                    />
                  </button>
                  <button
                    className="remove-btn"
                    // onClick={() => removeEdu(edu.id)}
                  >
                    <img
                      src="src/assets/close-svgrepo-com.svg"
                      alt="close"
                      width="15px"
                      height="15px"
                    />
                  </button>
                </div>
              </span>
              <p className="edu-institution edu-entry">{profEx.institution}</p>
              <p className="edu-city-state edu-entry">{profEx.cityState}</p>
              <p className="edu-start-end edu-entry">
                <span className="edu-start">
                  Start: {formatDate(profEx.startDate)}
                </span>

                <span className="edu-end">
                  End: {formatDate(profEx.endDate)}
                </span>
              </p>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
