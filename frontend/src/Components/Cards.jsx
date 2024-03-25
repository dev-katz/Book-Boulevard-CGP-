import React, { useState, useEffect } from 'react';
import style from './Css/Cards.css';
import card from '../bookcards.json';
import ProfileSection from './ProfileSection';
import Navbar from './Navbar';
import Footer from './Footer';

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
            <Navbar />
            <ProfileSection username="Yevin Mawathage" profileImage="profile.jpg" />
            <div className="gallery">
                {card.map(card => (
                    <div key={card.id} className="card">
                        <div className="book-image">
                            <img src={card.image} alt={card.title} className='cardimage'/>
                        </div>
                        <div className="card-content">
                            <div className="card-details">
                                <h2 className='cardheading'>{card.title}</h2>
                                <p className='cardpara'><strong></strong> {card.author}</p>
                                <p className='card-des'>{card.description}</p>
                                <button className='cardbutton'>View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    );
};

export default CardsPage;