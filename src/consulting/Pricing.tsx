import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 25vh;
  padding: 2rem;
  text-align: center;

  h2,
  h3 {
    margin-bottom: 1rem;
  }
`;

export const Pricing: FC = () => (
  <Wrapper>
    <div className="inner">
      <h2>We offer the following pricing for consulting:</h2>
      <h3>$150 / hr</h3>
      <h3>$500 / day</h3>
      <h3>$4000 / week</h3>
    </div>
  </Wrapper>
);
