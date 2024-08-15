import React, { FC } from 'react';
import styled from 'styled-components';

const GetInTouch = styled.a`
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1.2rem;
  border: 0;
  background: var(--mid);
  color: var(--light);
  border: 1px solid var(--mid);
  text-decoration: none;

  &:hover,
  &:focus {
    background: var(--light);
    color: var(--mid);
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About: FC = () => (
  <section className="text-section">
    <InnerWrapper className="inner center">
      <h2 className="section-title">Who we are</h2>
      <h3 className="sub-title">
        We are builders, creators and makers. We design with data and emotion. We are empathetic, user-focused and mobile-first. We are
        lean, agile and test-driven. We are analytic cyberprophets. We are wired socialites.
        <br />
        <br />
        We are KingdomWorks.
      </h3>
      <GetInTouch href="#contact-pane">Reach Out</GetInTouch>
    </InnerWrapper>
  </section>
);

export default About;
