import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="background-image"></div>
      <div className="boulevard-highlight"></div> {/* Add this line for the red rectangle */}
      <div className="content-container">
        <div className="text-container">
          <h1>Book Boulevard</h1>
          <h2>Embark on a Reading Adventure</h2>
          <p>Explore Our Vast Library of Stories, Genres, and Authors <br/> Await Your Discovery.</p>
          <p>Start Browsing Now</p>
        </div>
        <div className="button-container">
          <button className="btn" data="Browse Library"></button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
