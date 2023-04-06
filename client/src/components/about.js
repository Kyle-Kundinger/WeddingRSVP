import React from 'react';
import US from '../images/US.jpg';

function About() {
  return (
    <div className="container" style={{
      paddingTop: '60px',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      marginTop: '40px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
      borderRadius: '10px',
    }}>
      <h2>About Us</h2>
      <hr />
      <div className="row">
        <div className="col-md-6 mb-4">
          <p>
            Ariel and Kyle's love story began in the digital realm, where chance encounters and swipes hold the key to a world of possibilities. It was a typical day for both of them, swiping through Tinder in search of that elusive spark that could ignite a meaningful connection. Little did they know that fate had a delectable twist in store for them.
          </p>
          <p>
            Kyle's profile caught Ariel's eye with a simple yet enticing promise: "I will cook you food." Intrigued by this culinary Casanova, Ariel swiped right, hoping for an adventure in both romance and gastronomy. Their first conversation flowed effortlessly, filled with laughter and a mutual appreciation for the finer things in life. As the days turned into weeks, it became apparent that they shared more than just a love for good food; they had stumbled upon a connection that went beyond the digital realm.
          </p>
          <p>
            For their first date, Ariel and Kyle decided to meet at a cozy coffee shop. The aroma of freshly brewed coffee and the warmth of the atmosphere perfectly complemented the electric chemistry between them. As they sipped their drinks and chatted, they found themselves lost in each other's stories and laughter. Little did they know that this humble coffee date would be the beginning of a beautiful journey filled with love, happiness, and, of course, delicious home-cooked meals.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={US}
            alt="Ariel and Kyle"
            className="img-fluid rounded mb-4"
          />
        </div>
      </div>
      <p>
        
      </p>
    </div>
  );
}

export default About;
