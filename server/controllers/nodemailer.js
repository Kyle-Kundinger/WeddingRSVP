const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      // gets the email and password from the .env file
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // email options
  const mailOptions = {
    from: 'kundingerkyle33@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message, 
    html: `<h1>Thank for submitting your RSVP!</h1>
    <p>Here is the information you submitted:</p>
    <ul>
      ${options.people.map(person => `<li>${person.firstName} ${person.lastName} - ${person.attending ? `Attending <br />Food Choice - ${person.foodChoice}` : 'Not Attending'}</li>`).join('')}
    </ul>
    <br />
    <p>Best,</p>
    <p>Kyle and Ariel</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
