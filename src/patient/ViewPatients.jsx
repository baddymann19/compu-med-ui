import React from 'react';
import { Link } from 'react-router-dom';

const ViewPatients = ({ patients }) => {
  return (
    <div  style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'row' }}>
      <h1>View Patient</h1>
        <Link to="/patient/create">Create Patient</Link>
      {patients.map((patient, index) => (
        <div key={patient.id} >
          <h2>{index + 1}. Name: {patient.name} {patient.surname}</h2>
          <p>Date of Birth: {patient.dateOfBirth}</p>
          <p>Social Security Number: {patient.socialSecurityNumber}</p>
        <p/>
        </div>
      ))}
    </div>
  );
};

export default ViewPatients;