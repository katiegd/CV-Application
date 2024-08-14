import React from "react";

function SimpleContactInfo({ formData, handleChange }) {
  return (
    <div>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={formData.firstName || ""}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={formData.lastName || ""}
        onChange={handleChange}
      />
    </div>
  );
}

export default SimpleContactInfo;
