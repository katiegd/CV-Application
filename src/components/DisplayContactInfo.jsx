import "../Display.css";

function DisplayOutput({ contact, education, profEx, skills, proSum }) {
  return (
    <>
      <div className="contact-left">
        <div className="resume-name">
          <p>
            {contact.firstName} {contact.lastName}
          </p>
        </div>
        <div className="contact-info">
          <p className="resume-email-phone">{contact.email}</p>
          <p className="resume-email-phone">{contact.phone}</p>
          <p className="resume-address">
            {contact.city}, {contact.state} {contact.zip}
          </p>
        </div>
      </div>
      <div className="resume-right">
        Professional Summary: {proSum}
        <p>Hello.</p>
      </div>
    </>
  );
}

export default DisplayOutput;
