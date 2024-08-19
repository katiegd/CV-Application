import { useState } from "react";

export default function Skills({
  skillsList,
  skillInput,
  handleSkillChange,
  addNewSkill,
  removeSkill,
}) {
  return (
    <>
      <div className="skills-input-wrapper">
        <input
          type="text"
          value={skillInput}
          onChange={handleSkillChange}
          className="skills-input"
        ></input>
        <button onClick={addNewSkill} className="add-skill-btn">
          Add
        </button>
      </div>

      <div className="skills-container">
        {skillsList.map((skill) => (
          <div id={skill.id} key={skill.id} className="skill-list-item">
            <p className="skill-name">{skill.name}</p>
            <button
              id={skill.id}
              className="remove-skill-btn"
              onClick={() => removeSkill(skill.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
