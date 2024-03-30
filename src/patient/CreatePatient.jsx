import React, { useState } from 'react';
import axios from 'axios';

const CreatePatient = ({ fetchPatients }) => {
  const [patient, setPatient] = useState({ name: '', surname: '', dateOfBirth: '', socialSecurityNumber: '' });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/patient', patient);
      setPatient({ name: '', surname: '', dateOfBirth: '', socialSecurityNumber: '' });
      fetchPatients();
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <form onSubmit={handleSubmit} style={{ width: '50%', margin: '20px auto', fontSize: '1.5em' }}>
          <input name="name" value={patient.name} onChange={handleChange} placeholder="Name" required style={{ width: '100%', height: '50px' }}/><br/>
          <input name="surname" value={patient.surname} onChange={handleChange} placeholder="Surname" required style={{ width: '100%', height: '50px' }}/><br/>
          <input name="dateOfBirth" type={"date"} value={patient.dateOfBirth} onChange={handleChange} placeholder="DateOfBirth" required style={{ width: '100%', height: '50px' }}/><br/>
          <input name="socialSecurityNumber" value={patient.socialSecurityNumber} onChange={handleChange} placeholder="SocialSecurityNumber"
                 required style={{ width: '100%', height: '50px' }}/><br/>
          <button type="submit">Create Patient</button>
          <br/>
      </form>
  );
};

export default CreatePatient;