import React, {Fragment} from 'react';
import About from './about/About';
import Services from './about//Services';
import Questions from './about/Questions';

const AboutMain = () => {
  return (
    <Fragment>
      <About />
      <Services />
      <Questions />
    </Fragment>
  );
};

export default AboutMain;