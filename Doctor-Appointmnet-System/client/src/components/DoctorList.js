import React from "react";
import { useNavigate } from "react-router-dom";
import maleDoctor from '../assets/cardm.png';
import femaleDoctor from '../assets/cardf.png'

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  const url = doctor.gender === "male" ? maleDoctor : femaleDoctor;
  
  return (

    <>
      <div
        className="card m-2 drcard"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
      {/* {doctor.image == ""?doctor.gender=="male"?{maledoctor}:femaledoctor : doctor.image} */}
        <img className="doctor-image" src={url} alt="doctor-image" />
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
