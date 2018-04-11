import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div id='main_hero' className='pic_wrapper'>
        <div className='container grid'>
          <div className='section'>
              <h1>Steak Sec</h1>
              <p>See minutes under About section.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
