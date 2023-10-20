import React from 'react';
import { CSSTransition } from 'react-transition-group';

const AnimatedPage = ({ children }) => (
  <CSSTransition in={true} appear={true} timeout={300} classNames="page" unmountOnExit>
    <div>{children}</div>
  </CSSTransition>
);

export default AnimatedPage;
