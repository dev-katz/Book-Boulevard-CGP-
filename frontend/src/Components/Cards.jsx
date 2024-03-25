import React, { useState, useEffect } from 'react';
import './Css/Cards.css';
import card from '../bookcards.json';
import ProfileSection from './ProfileSection';

const CardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="cards-page">
      <ProfileSection username="Your Username" profileImage="profile.jpg" />
      <div className="gallery">
        {card.map(card => (
          <div key={card.id} className="card">
            <div className="book-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
              <div className="card-details">
                <h2>{card.title}</h2>
                <p><strong></strong> {card.author}</p>
                <p>{card.description}</p>
                <button>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;