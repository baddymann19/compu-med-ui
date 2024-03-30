import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import CreatePatient from "./patient/CreatePatient";
import ViewPatients from "./patient/ViewPatients";

function App() {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const res = await axios.get('/api/patient');
      setPatients(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ fontSize: '3em', textAlign: 'center' }}>
            Compu Med App
        </header>
        <div id="body" style={{ display: 'flex', justifyContent: 'space-between', height: '100vh', flexDirection: 'row' }}>
            <ViewPatients patients={patients} style={{ width: '50%' }} />
            <CreatePatient fetchPatients={fetchPatients} style={{ width: '50%' }} />
        </div>
      </div>
    </Router>
  );
}

export default App;