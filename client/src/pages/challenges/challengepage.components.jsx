import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const ChallengePage = ({ history }) => (
  <div>
    <h2>CHALLENGES PAGE</h2>
    <button type="button" onClick={() => history.push(`/challenges/${1}`)}>Join Challenge (1)</button>
  </div>
);

ChallengePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// we use withRouter to get the history in order to navigate
export default withRouter(ChallengePage);
