import React from "react";
import Challenge from '../../components/challenge/challenge.component';
import { withRouter } from 'react-router-dom';

const ChallengePage = ({history}) => {
  return (
      <div>
        <h2>CHALLENGES PAGE</h2>
        <button onClick={() => history.push(`/challenges/${1}`)}>Join Challenge (1)</button>
      </div>
  );
};

export default withRouter(ChallengePage);
