import React from 'react';

import './styles.css';

const About = ({children}) => {
  return (
    <article className='about'>
      {children}
    </article>
  );
}

export default About;