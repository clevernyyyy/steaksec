import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className='container'>
        <div className='section'>
          <h1>Calendar</h1>
          <h3>Next Meeting:</h3>
          <p>Tuesday, May 8th, 5:00pm</p>
          <p><iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7860782930516!2d-96.106635684173!3d41.291760009879894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8793ed70d2465161%3A0xb03799e7671ac8e2!2sPizzaWest!5e0!3m2!1sen!2sus!4v1523484359848" width="600" height="450" frameBorder="0" allowFullScreen></iframe></p>
        </div>
      </div>
    );
  }
}

export default Calendar;

