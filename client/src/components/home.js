import React from "react";
import Rsvp from "./rsvp";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showRsvp: false,
    };
    this.toggleRsvp = this.toggleRsvp.bind(this);
  }

  toggleRsvp() {
    this.setState(prevState => ({ showRsvp: !prevState.showRsvp }));
  }

  render() {
    const { showRsvp } = this.state;

    return (
      <div
        className="container"
        style={{
          paddingTop: "60px",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          marginTop: "40px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 1)",
          borderRadius: "10px",
        }}
      >
        {!showRsvp && (
          <>
            <h1>Welcome to Our Wedding!</h1>
            <p>
              We are thrilled to have you join us in celebrating our special day.
              Please find the event details below:
            </p>
            <p style={{ marginLeft: '1em', lineHeight: '1.8em' }}>
              Date: October 21st, 2023<br />
              Time: 3:00 P.M.<br />
              Venue: 404<br />
              Address: 404 N Main St, Oshkosh, WI 54901<br />
            </p>
            <button className="buttonRSVP" onClick={this.toggleRsvp}>RSVP</button>
          </>
        )}
        {showRsvp && (
          <>
            <Rsvp />
            <button className="button" onClick={this.toggleRsvp}>Back to Home</button>
          </>
        )}
      </div>
    );
  }
}

export default Home;
