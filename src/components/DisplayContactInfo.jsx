import "../Display.css";
function DisplayOutput({ formData }) {
  return (
    <>
      <div className="contact-left">
        <p className="resume-name">
          {formData.firstName} {formData.lastName}
        </p>
        <div className="contact-info">
          <p className="resume-email-phone">{formData.email}</p>
          <p className="resume-email-phone">{formData.phone}</p>
          <p className="resume-address">
            {formData.city}, {formData.state} {formData.zip}
          </p>
        </div>
      </div>
    </>
  );
}

export default DisplayOutput;
