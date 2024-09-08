import { FC } from 'react';

import { techList } from './TechList';
import styled from 'styled-components';
import { TechnologyComponent } from './TechComponent';

const Wrapper = styled.section`
  background: var(--blue);
  min-height: 50vh;
  color: white;
  padding: 5rem;

  h2 {
    color: white;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const TechListWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

const CTA = styled.div`
  margin: 3rem auto 0 auto;
  display: flex;
`;

const GetInTouch = styled.a`
  margin: 0 auto;
  display: inline-block;
  background: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);

  &:hover {
    background: var(--blue);
    color: var(--white);
    border: 1px solid var(--white);
  }
`;

export const Technologies: FC = () => {
  const techMap = techList.map(t => <TechnologyComponent key={t.id} data={t} />);

  return (
    <Wrapper>
      <div className="inner">
        <h2>So what do you need help with?</h2>
        <TechListWrapper>{techMap}</TechListWrapper>
        <CTA>
          <GetInTouch href="#contact-pane">Let's Peer Program</GetInTouch>
        </CTA>
      </div>
    </Wrapper>
  );
};

export default Technologies;
