import React from 'react';

const NewStar = props => (
      <p>
        The new star {props.currentStar.name} is {props.currentStar.diameter} suns in diameter!
      </p>
    );

export default NewStar;