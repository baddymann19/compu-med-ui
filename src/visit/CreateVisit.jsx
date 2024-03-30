import React, { useState } from 'react';
import axios from 'axios';

const CreateVisit = ({ fetchVisits, patients }) => {
  const [visit, setVisit] = useState({ dateTime: '', visitType: '', reason: '', familyHistory: '', patientId: '' });

  const visitTypes = ['HOME', 'DOCTOR_OFFICE'];

  const handleChange = (e) => {
    setVisit({ ...visit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/visit', visit);
      setVisit({ dateTime: '', visitType: '', reason: '', familyHistory: '', patientId: '' });
      fetchVisits();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width: '50%', margin: '20px auto', fontSize: '1.5em'}}>
      <select name="patientId" value={visit.patientId} onChange={handleChange} required style={{width: '100%', height: '50px'}}>
        <option value="">Select Patient</option>
        {patients.map(patient => (
          <option key={patient.id} value={patient.id}>{patient.name} {patient.surname}</option>
        ))}
      </select><br/>
      <select name="visitType" value={visit.visitType} onChange={handleChange} required style={{width: '100%', height: '50px'}}>
        <option value="">Select Visit Type</option>
        {visitTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select><br/>
      <input name="dateTime" type="datetime-local" value={visit.dateTime} onChange={handleChange} placeholder="DateTime" required style={{width: '100%', height: '50px'}}/><br/>
      <input name="reason" value={visit.reason} onChange={handleChange} placeholder="Reason" required style={{width: '100%', height: '50px'}}/><br/>
      <textarea name="familyHistory" value={visit.familyHistory} onChange={handleChange} placeholder="FamilyHistory" required style={{width: '100%', height: '100px'}}/><br/>
      <button type="submit">Create Visit</button>
      <br/>
    </form>
  );
};

export default CreateVisit;