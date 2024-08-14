function DisplayOutput({ formData }) {
  return (
    <>
      <h3>{formData.firstName}</h3>
      <h3>{formData.lastName}</h3>
      <h3>{formData.email}</h3>
    </>
  );
}

export default DisplayOutput;
