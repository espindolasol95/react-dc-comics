import React from 'react';

const ComicCard = ({ title, thumb, }) => {
  return (
    <div>
      <img src={thumb} alt={title} />
      <h4>{series}</h4>
      
    </div>
  );
};

export default ComicCard;
