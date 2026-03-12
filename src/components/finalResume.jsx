import "../styles/finalResume.css";
export default function FinalResume({ formData }) {
  return (
    <>
      <div className="finalResume">
        <div>{formData.firstName}</div>
        <div>{formData.lastName}</div>
        <div>{formData.Contact}</div>
        <div>{formData.email}</div>
        <div>{formData.address}</div>
        <div>{formData.linkedIn}</div>
        <div>{formData.University}</div>
        <div>{formData.Degree}</div>
        <div>{formData.CGPA}</div>
        <div>{formData.Role}</div>
        <div>{formData.Employer}</div>
        <div>{formData.startDate}</div>
        <div>{formData.endDate}</div>
        <div>{formData.Achievements}</div>
      </div>
    </>
  );
}
