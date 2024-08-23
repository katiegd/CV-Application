import { useState } from "react";

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

export default function ProfessionalExp() {
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
    }

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

  function formatDate(date) {
    const [year, month] = date.split("-");

    return `${month}/${year}`;
  }

  return (
    <>
      <form className="prof-exp-inputs">
        <div className={`input-wrapper ${profSummary.name}`}>
          <label className="input-label">{profSummary.display}</label>{" "}
          <textarea
            className="profSummary"
            id={profSummary.id}
            value={professionalSum}
            onChange={handleProfessionalSum}
            required
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
              onChange={handleProfExChange}
              value={profExInput[field.name]}
              required
            />
          </div>
        ))}
        <div className={`input-wrapper ${bulletPoints.name}`}>
          <label key={bulletPoints.id} className="input-label">
            {bulletPoints.display}
          </label>
          <div className="bullet-point-wrapper">
            <input
              type={bulletPoints.type}
              onChange={handleBulletPointChange}
              value={bulletPoint}
            ></input>{" "}
            <button className="add-btn" onClick={addBulletPoint}>
              Add
            </button>
          </div>
          <div className="bullet-point-container">
            {bulletPointList.map((bullet) => (
              <div key={bullet.id} className="bullet-point-entry">
                <span className="bullet-text">{bullet.text} </span>
                <button
                  className="remove-btn"
                  onClick={(e) => removeBullet(bullet.id, e)}
                >
                  <img
                    src="src/assets/close-svgrepo-com.svg"
                    alt="close"
                    width="15px"
                    height="15px"
                  />
                </button>
              </div>
            ))}
          </div>
          <hr />

          <button
            className="add-btn"
            onClick={(e) => {
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
                <p className="edu-degree edu-entry">{profEx.jobTitle}</p>
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
                    onClick={() => removeProfEx(profEx.id)}
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
              <p className="profEx-company profEx-entry">{profEx.company}</p>
              <p className="profEx-location profEx-entry">
                {profEx.location}
              </p>{" "}
              {profEx.bulletPoints.length > 0 ? (
                <div className="profEx-responsibilities">
                  {" "}
                  <ul>
                    {profEx.bulletPoints.map((bullet) => (
                      <li key={bullet.id}>{bullet.text}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}{" "}
              <p className="profEx-start-end profEx-entry">
                <span className="profEx-start">
                  Start: {formatDate(profEx.startDate)}
                </span>

                <span className="profEx-end">
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
