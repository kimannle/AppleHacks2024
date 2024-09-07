import React, { useEffect } from 'react';

function StarryNight() {
    useEffect(() => {
      // Generate random stars on the background
      const starContainer = document.querySelector('.star-container');
      const numStars = 100; // Adjust this number for more/less stars
  
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
  
        // Random size and position for each star
        const size = Math.random() * 4 + 1; // Between 1px and 3px
        const top = Math.random() * 100; // Random percentage for top position
        const left = Math.random() * 100; // Random percentage for left position
  
        // Apply random size and position to each star
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
  
        starContainer.appendChild(star);
      }
    }, []);
  

    return <div className="star-container"></div>;
}
export default StarryNight;