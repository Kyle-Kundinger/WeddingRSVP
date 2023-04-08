import React, { useState } from 'react';
import RsvpForm from './rsvpform';
import axios from 'axios';
import API_BASE_URL from '../apiconfig';
import Loading from 'react-loading';

const Rsvp = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [personData, setPersonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [invalid, setInvalid] = useState(false);

  

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/group/${name}`);
      console.log(response.data);
      setPersonData(response.data.person);
      setPeople(response.data.person);
      setSubmitted(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setInvalid(true);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 80px)',
      padding: '0 20px'
    }}>
      <div style={{
        position: 'relative',
        marginTop: '80px',
        backgroundColor: 'rgba(52, 58, 64, 0.6)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        zIndex: '999',
        color: 'white',
      }}>
        {loading ? (
          <Loading type="spin" color="#FFFFFF" />
        ) : 
        submitted ? (
          <RsvpForm name={name} personData={personData} people={people} />
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Please start the process by entering your group number</h2>
            <label>
              (This is the number that was sent to you in your invitation)
              <br />
              {invalid ? <span><br /><p>Sorry, we couldn't find that group number</p></span> : ''}
              <br />
              <input type="text" value={name} onChange={handleChange} />
              
            </label>
            
            <br />
            <br />
            <input type="submit" value={loading ? 'Loading...' : 'RSVP'} disabled={loading} />
          </form>
        )}
      </div>
    </div>
  );
};

export default Rsvp;
