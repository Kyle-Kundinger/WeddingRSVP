import React from 'react';
import venue404 from '../images/venue404.jpg';

function Directions() {
  return (
    <div className="container" style={{
      paddingTop: '60px',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      marginTop: '40px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
      borderRadius: '10px',
    }}>
      <h2>Directions to the Wedding</h2>
      <hr />
      <div className="row">
        <div className="col-md-6 mb-4">
          <p>
            The wedding will take place at Venue 404, a beautiful location in Oshkosh, WI. Venue 404 is located at 404 N Main St, Oshkosh, WI 54901. Please plan your travel accordingly to ensure a timely arrival and join us in celebrating this special day.
          </p>
          <p>
            We recommend using Google Maps for accurate directions and real-time traffic updates. You can easily access the directions by clicking the button below or by manually entering the address into your preferred navigation app.
          </p>
          <a
            href="https://www.google.com/maps/dir//404+N+Main+St,+Oshkosh,+WI+54901"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get Directions
          </a>
        </div>
        <div className="col-md-6">
          <img
            src={venue404}
            alt="Venue 404"
            className="img-fluid rounded mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Directions;
