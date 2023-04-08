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
    <div>
      {loading ? (
        <Loading type="spin" color="#FFFFFF" />
      ) : submitted ? (
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
          <input type="submit" value={loading ? 'Loading...' : 'Search'} disabled={loading} className='buttonRSVP'/>
        </form>
      )}
    </div>
  );
};

export default Rsvp;
