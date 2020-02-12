import React from 'react';
import { withRouter } from 'react-router-dom';

const Challenge = props => {
  console.log(props.match.params);
  return (
    <div className='challenge'>
      <h2>Welcome to Challenge: {props.match.params.id}</h2>
    </div>
  );
};

export default Challenge;
