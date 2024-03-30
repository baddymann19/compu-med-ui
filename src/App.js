import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import CreatePatient from "./patient/CreatePatient";
import ViewPatients from "./patient/ViewPatients";
import CreateVisit from "./visit/CreateVisit";
import ViewVisits from "./visit/ViewVisit";

function App() {
    const [patients, setPatients] = useState([]);
    const [visits, setVisits] = useState([]);

    const fetchPatients = async () => {
        try {
            const res = await axios.get('/api/patient');
            setPatients(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchVisits = async () => {
        try {
            const res = await axios.get('/api/visit');
            setVisits(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPatients();
        fetchVisits();
    }, []);

    return (
        <Router>
            <div className="App">
                <header className="App-header" style={{fontSize: '3em', textAlign: 'center'}}>
                    Compu Med App
                </header>
                <div id="body" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        maxHeight: '50vh',
                        overflowY: 'auto'
                    }}>
                        <ViewPatients patients={patients} style={{width: '50%'}}/>
                        <CreatePatient fetchPatients={fetchPatients} style={{width: '50%'}}/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        maxHeight: '50vh',
                        overflowY: 'auto'
                    }}>
                        Visits Register
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        maxHeight: '50vh',
                        overflowY: 'auto'
                    }}>
                        <ViewVisits visits={visits} style={{width: '50%'}}/>
                        <CreateVisit fetchVisits={fetchVisits} patients={patients} style={{width: '50%'}}/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;