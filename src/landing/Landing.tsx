import { FC } from 'react';
import About from './About';
import Jumbo from './Jumbo';
import Contact from './Contact';

export const Landing: FC = () => (
  <>
    <Jumbo />
    <About />
    <Contact />
  </>
);

export default Landing;
