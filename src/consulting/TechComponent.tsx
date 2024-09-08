import { FC } from 'react';
import { Tech } from './TechList';
import styled from 'styled-components';

const Item = styled.div`
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

const Img = styled.img`
  height: 200px;
  width: auto;
  display: block;
  margin: 0 auto 1rem auto;
`;

export const TechnologyComponent: FC<{ data: Tech }> = ({ data }) => {
  return (
    <Item className={'technology ' + data.id}>
      <Img src={data.img} alt={data.name} title={data.name} />
      {data.name}
    </Item>
  );
};
