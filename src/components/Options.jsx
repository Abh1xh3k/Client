import React from 'react';
import Slider from 'react-slick';
import { FaUtensils, FaCoffee, FaHamburger, FaPizzaSlice, FaIceCream, FaCocktail } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Carousel categories with icons and titles
const categories = [
  { title: 'Starters', icon: <FaUtensils size={40} color="#333" /> },
  { title: 'Breakfast', icon: <FaCoffee size={40} color="#333" /> },
  { title: 'Lunch', icon: <FaHamburger size={40} color="#333" /> },
  { title: 'Dinner', icon: <FaPizzaSlice size={40} color="#333" /> },
  { title: 'Sweets', icon: <FaIceCream size={40} color="#333" /> },
  { title: 'Drinks', icon: <FaCocktail size={40} color="#333" /> },
];

export  function Options() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
    style={styles.carouselContainer}>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} style={styles.carouselCard}>
            <div style={styles.circularCard}>
              {category.icon}
            </div>
            <h3 style={styles.cardTitle}>{category.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Inline styles for the component
const styles = {
  carouselContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 0',
  },
  carouselCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none', // To remove outline around the slick slides
  },
  circularCard: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#f3f3f3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    marginTop: '1rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#333',
  },
};
