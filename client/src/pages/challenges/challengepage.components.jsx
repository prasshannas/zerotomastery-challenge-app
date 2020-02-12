import React from 'react';
import { withRouter } from 'react-router-dom';

const ChallengePage = ({ history }) => {
  return (
    <div>
      <h2>CHALLENGES PAGE</h2>
      <button onClick={() => history.push(`/challenges/${1}`)}>
        Join Challenge (1)
      </button>
    </div>
  );
};

// we use withRouter to get the history in order to navigate
export default withRouter(ChallengePage);
