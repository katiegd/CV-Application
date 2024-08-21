export default function ProfessionalExp() {
  function formatDate(date) {
    const [year, month] = date.split("-");

    return `${month}/${year}`;
  }

  const eduInputFields = [
    {
      name: "degree",
      id: crypto.randomUUID(),
      type: "text",
      display: "Degree: ",
    },
    {
      name: "institution",
      id: crypto.randomUUID(),
      type: "text",
      display: "University/School/Institution: ",
    },
    {
      name: "cityState",
      id: crypto.randomUUID(),
      type: "text",
      display: "City, State",
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
        {/* {eduInputFields.map((field) => (
          <div key={field.name} className={`input-wrapper ${field.name}`}>
            <label key={field.id} htmlFor={field.name} className="input-label">
              {field.display}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.id}
              onChange={handleChange}
              value={eduInput[field.name]}
            />
          </div>
        ))} */}
        <button className="add-btn" onClick={addEducation}>
          Add
        </button>
        <div className="edu-container">
          {eduList.map((edu) => (
            <div className="edu-item" id={edu.id} key={edu.id}>
              <span className="edu-degree-delete-btn">
                <p className="edu-degree edu-entry">{edu.degree}</p>
                <button className="remove-btn" onClick={removeEdu}>
                  x
                </button>
              </span>
              <p className="edu-institution edu-entry">{edu.institution}</p>
              <p className="edu-city-state edu-entry">{edu.cityState}</p>
              <p className="edu-start-end edu-entry">
                <span className="edu-start">
                  Start: {formatDate(edu.startDate)}
                </span>

                <span className="edu-end">End: {formatDate(edu.endDate)}</span>
              </p>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}
