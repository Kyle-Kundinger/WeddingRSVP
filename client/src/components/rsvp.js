import React, { useState } from 'react';
import RsvpForm from './rsvpform';
import axios from 'axios';
import API_BASE_URL from '../apiconfig';
import Loading from 'react-loading';

const Rsvp = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [personData, setPersonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [invalid, setInvalid] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const timeout = (ms) => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('Request timeout')), ms));
  };

  const fetchWithTimeout = async (url, options, timeoutDuration, retryLimit = 3) => {
    try {
      const response = await Promise.race([axios(url, options), timeout(timeoutDuration)]);
      return response;
    } catch (error) {
      if (error.message === 'Request timeout') {
        if (retryLimit > 0) {
          console.log('Request timed out, retrying...');
          return fetchWithTimeout(url, options, timeoutDuration, retryLimit - 1);
        } else {
          throw new Error('Request timed out after multiple retries');
        }
      } else {
        throw error;
      }
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/api/v1/name/${firstName}/${lastName}`, {}, 5000);
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
    <div>
      {loading ? (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}>
          <Loading type="bubbles" color="#FFFFFF" />
          <h2>Loading...</h2>
        </div>
      ) : submitted ? (
        <RsvpForm name={name} personData={personData} people={people} />
      ) : (
        <form onSubmit={handleSubmit}>
    <h2>Please start the process by entering your first and last name</h2>
    <label>
        First Name:
        <br />
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
    </label>
    <br />
    <label>
        Last Name:
        <br />
        <input type="text" value={lastName} onChange={handleLastNameChange} />
    </label>
    <br />
    {invalid ? <span><br /><p>Sorry, we couldn't find that name in our database</p></span> : ''}
    <br />
    <input type="submit" value={loading ? 'Loading...' : 'Search'} disabled={loading} className='buttonRSVP'/>
</form>
      )}
    </div>
  );
};

export default Rsvp;
