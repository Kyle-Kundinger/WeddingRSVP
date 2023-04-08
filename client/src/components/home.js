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
              Date: [Wedding Date]<br />
              Time: [Wedding Time]<br />
              Venue: [Wedding Venue]<br />
              Address: [Wedding Venue Address]
            </p>
            <button onClick={this.toggleRsvp}>RSVP</button>
          </>
        )}
        {showRsvp && (
          <>
            <Rsvp />
            <button onClick={this.toggleRsvp}>Back to Home</button>
          </>
        )}
      </div>
    );
  }
}

export default Home;
