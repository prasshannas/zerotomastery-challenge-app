import React from 'react';
import './signuppage.styles.scss';

const SignupPage = () => (
  <div className="signup-page">
    <h2>Signup PAGE</h2>
    <form>
      <div className="form-input">
        <label htmlFor="nickname">Enter Your Nickname</label>
        <input id="nickname" type="text" name="nickname" />
      </div>
      <div className="form-input">
        <label htmlFor="email">Enter Your Email</label>
        <input id="email" type="email" name="email" />
      </div>
      <div className="form-input">
        <label htmlFor="password">Enter Your Password</label>
        <input id="password" type="password" name="password" />
      </div>
      <input
        type="button"
        name="submit"
        value="Signup"
        // eslint-disable-next-line no-console
        onClick={() => console.log('signup button clicked')}
      />
    </form>
  </div>
);

export default SignupPage;
