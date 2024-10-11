/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './style.css';
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoImage from './assets/logo.png';
import characterImage1 from './assets/character.webp';
import characterImage2 from './assets/character2.webp';
import characterImage3 from './assets/character3.webp';
import characterImage4 from './assets/character4.webp';
import manhwa1 from './assets/manhwa1.jpg';
import manhwa2 from './assets/manhwa2.jpg';
import manhwa3 from './assets/manhwa3.jpg';
import aboutImage from './assets/full.png';

// Importing character images as an array
const characterImages = [
  characterImage1,
  characterImage2,
  characterImage3,
  characterImage4,
];

// Characters data
const charactersData = [
  {
    id: 'artemis',
    name: 'Artemis',
    image: characterImages[0],
    description: 'Artemis, the goddess of the hunt, is Persephone’s best friend and roommate. She is a robust, dark-red tomboy fiercely protective of Persephone. Her relationship with her brother Apollo grows as he realizes his true nature.',
  },
  {
    id: 'hades',
    name: 'Hades',
    image: characterImages[1],
    description: 'Hades is the ruler of the underworld, a complex figure in the story. His interactions with Persephone shape the narrative in unexpected ways.',
  },
  {
    id: 'persephone',
    name: 'Persephone',
    image: characterImages[2],
    description: 'Persephone, the goddess of spring, is the story’s heroine. Initially portrayed as an innocent and naive young woman, she undergoes significant development throughout the series.',
  },
  {
    id: 'demeter',
    name: 'Demeter',
    image: characterImages[3],
    description: 'Demeter, the harvest goddess, is Persephone’s overprotective mother. She is depicted as a tall green woman with long red hair, representing nature’s bounty.',
  },
];

// Manhwa images
const manhwaImages = [manhwa1, manhwa2, manhwa3];

const LoreOlympusWebtoon = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCharacters, setExpandedCharacters] = useState({});

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % manhwaImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + manhwaImages.length) % manhwaImages.length);
  };

  const toggleReadMore = (id) => {
    setExpandedCharacters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logoImage} alt="Logo" className="logo-img" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger" onClick={() => {/* Toggle menu */}}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="animated-text">Lore Olympus Webtoon: Jaw Dropping Seen on Media</h1>
          <p className="h-btn">Rachel Smith’s Lore Olympus webtoon is a modern retelling of the ancient Greek myth of Hades and Persephone, providing details on the characters, major themes, and the impact this series has on readers.</p>
          <div className="h-btn">
            <a href="#read-more" className="cta-button">Read More</a>
          </div>
        </div>
      </section>

      <h1 className="characters-section-heading">Characters Supernatural Manhwa</h1>
      <section id="characters" className="characters-section">
        {charactersData.map(character => (
          <div className="character" id={character.id} key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="character-details">
              <h3>{character.name}</h3>
              <p className="character-description">
                {character.description.split("...")[0]} 
                <span className="more-text" style={{ display: expandedCharacters[character.id] ? 'inline' : 'none' }}>
                  {character.description.split("...")[1]}
                </span>
              </p>
              <button className="read-more-btn" onClick={() => toggleReadMore(character.id)}>
                {expandedCharacters[character.id] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </section>

      <section id="manhwa-carousel" className="carousel-section">
        <h2>Best Supernatural Manhwa</h2>
        <div className="carousel">
          <div className="slide">
            <img
              src={manhwaImages[currentSlide]}
              alt={`Manhwa ${currentSlide + 1}`}
              loading="lazy" // Lazy load the images
            />
          </div>
        </div>
        <button className="prev" onClick={handlePrev}>&larr;</button>
        <button className="next" onClick={handleNext}>&rarr;</button>
      </section>

      <h1 className="characters-section-heading">About AnimeMangaToon</h1>
      <section id="about">
        <img src={aboutImage} alt="About" />
        <div className="about-content">
          <h2>About Lore Olympus Webtoon</h2>
          <p className="about-description">
            Lore Olympus is a modern retelling of the ancient Greek myth of Hades and Persephone, which has taken the digital comics world by storm.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoreOlympusWebtoon;
