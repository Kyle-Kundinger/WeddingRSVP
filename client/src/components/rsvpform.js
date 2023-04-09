import React from 'react';
import PersonBlockData from './personBlockdata';
import { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from "../apiconfig";

const RsvpForm = ({ name, personData, people }) => {
  const [peopleData, setPeopleData] = useState(people);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updatePeople = async (peopleData) => {
    const updatedPeople = await Promise.all(
      peopleData.map(async (person) => {
        try {
          const response = await axios.patch(
            `${API_BASE_URL}/api/v1/${person._id}`,
            {
              foodChoice: person.foodChoice,
              attending: person.attending,
            }
          );
  
          if (response.status === 200) {
            console.log(`Person ${person._id} updated successfully.`);
            setLoading(false);
            setSubmitted(true);
            return response.data;
          } else {
            console.error(`Failed to update person ${person._id}.`);
            setLoading(false);
            setSubmitted(true);
            return null;
          }

          
        } catch (error) {
          console.error(`Error updating person ${person._id}:`, error);
          return null;
        }
      })
    );
  
    return updatedPeople.filter((person) => person !== null);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

  // Send email
  try {
    const email = e.target.elements.email.value;
    const response = await axios.post(`${API_BASE_URL}/api/v1/send-email`, { email });
    if (response.status === 200) {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email:', response.data.error);
    }
  } catch (error) {
    console.error('Error sending email:', error.response.data.error);
  }

    const updatedPeople = await updatePeople(peopleData);
    console.log(peopleData);
  };

  const handlePersonDataChange = (personId, field, value) => {
    console.log(personId, field, value);
    const newPeopleData = peopleData.map((person) => {
      if (person._id === personId) {
        return {
          ...person,
          [field]: value,
        };
      }
      return person;
    });

    setPeopleData(newPeopleData);
  };

  return (
    <>
      {submitted ? (
        <div>
          <h2>Thanks for RSVPing!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {people.map((personData) => (
            <PersonBlockData
              key={personData.firstName}
              name={personData.firstName}
              personData={personData}
              onChange={handlePersonDataChange}
            />
          ))}
          <br />
          <label>
            Please Enter Email:
          </label>
          <br />
          <br />
          <input type="email" name='email' style={{ marginLeft: "10px" }} />
          <br />
          <br />
          <br />
          <input
            type="submit"
            value={loading ? 'Loading...' : 'Submit'}
            disabled={loading}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          />
          <br />
        </form>
      )}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default RsvpForm;
