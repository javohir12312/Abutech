import React from 'react';
import './Twitter.scss'

const Twitter = () => {
  return (
    <div className='Twitter'>
        <form action="">
      <i className="fa fa-twitter">Welcome To Twitter</i>
      <div>
        <input type="text" placeholder="Phone, email or username" />
      </div>
      <div>
        <input type="password" />
      </div>
      <div className="remember-me">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
        &#8226;
        <a href="#">Forgot password</a>
      </div>
      <input type="submit" value="Log in" />
    </form>
    </div>
  );
};

export default Twitter;
