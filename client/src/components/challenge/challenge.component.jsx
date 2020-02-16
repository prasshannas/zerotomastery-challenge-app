import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Challenge = ({ match: { params: { id } } }) => (
  <div className="challenge">
    <h2>
      Welcome to Challenge:
      { id }
    </h2>
  </div>
);

Challenge.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Challenge);
