import React from 'react';

const PlanetList = props => (
        <ol>
          {props.planetList.map(planet => <li key={planet.name}>The planet {planet.name} is {planet.diameter} km in diameter!</li>)}
        </ol>
    );

export default PlanetList;