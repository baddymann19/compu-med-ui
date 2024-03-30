import React from 'react';

const ViewVisit = ({ visits }) => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'row' }}>
      <h1>View Visits</h1>
      {visits.map((visit, index) => (
          <div key={visit.id}>
              <h2>Patient ID: {visit.patientId}</h2>
              <p>{index + 1}. Visit Type: {visit.visitType}</p>
              <p>Date and Time: {visit.dateTime}</p>
              <p>Reason: {visit.reason}</p>
              <p>Family History: {visit.familyHistory}</p>
          </div>
      ))}
    </div>
  );
};

export default ViewVisit;