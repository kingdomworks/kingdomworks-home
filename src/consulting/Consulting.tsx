import { FC } from 'react';
import styled from 'styled-components';
import Technologies from './Technologies';
import Contact from '../components/Contact';
import { Pricing } from './Pricing';

const Intro = styled.div`
  min-height: 25vh;
  padding: 2rem;
  background: var(--white);

  h1,
  h2 {
    text-align: center;
    max-width: 75%;
    margin: 2rem auto;
  }

  h2 {
    font-size: 2rem;
    font-weight: normal;
  }
`;

export const Consulting: FC = () => (
  <div>
    <Intro>
      <h1>We believe everybody should have access to high quality software...</h1>
      <h2>
        By offering our specialized skills, design & development support, and training services to other organizations who could use a hand,
        we hope we can reach this goal one application at a time.
      </h2>
    </Intro>
    <Technologies />
    <Pricing />
    <Contact />
  </div>
);

export default Consulting;
