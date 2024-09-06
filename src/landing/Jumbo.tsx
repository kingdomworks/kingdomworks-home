import { FC } from 'react';
import styled from 'styled-components';
import CloudsImg from '../assets/img/bg.svg';
import BackgroundImg from '../assets/mg.svg';
import ForegroundImg from '../assets/fg.svg';
import GearSVG from '../assets/gear.svg';
import LogoSVG from '../assets/light_logo.svg';

const Baseground = styled.div<{ imageUrl: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${p => p.imageUrl}) no-repeat bottom center / 110%;
  opacity: 1;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background: #bce5ee;
`;

const LogoArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 90%;
  height: auto;
  max-width: 1200px;
  position: relative;
  animation: to_top 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 10;
`;

const Gear = styled.img`
  animation: rotating 2s linear infinite;
  opacity: 0;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: opacity 300ms ease-in-out;
  z-index: 10;

  path {
    fill: $white;
  }
`;

const Clouds = styled(Baseground)`
  background-position: center center;
  background-repeat: repeat-x;
  background-size: auto;
  height: 50vh;
  width: 5000%;
  bottom: initial;
  top: 0;
  animation: left_clouds 1000s linear infinite;
  z-index: 2;
`;

const Background = styled(Baseground)`
  z-index: 2;
  bottom: 10vh;

  @media only screen and (min-width: ${p => p.theme.sizes.tablet}) {
    bottom: 15vh;
  }
`;

const Foreground = styled(Baseground)`
  z-index: 4;
  bottom: 0;

  /* @media only screen and (min-width: ${p => p.theme.sizes.reg}) {
    bottom: -5vh;
  }

  @media only screen and (min-width: ${p => p.theme.sizes.lg}) {
    bottom: -10vh;
  }

  @media only screen and (orientation: landscape) and (${p => p.theme.sizes.table}) {
    bottom: -15vh;
  }

  @media only screen and (min-width: ${p => p.theme.sizes.hd}) {
    bottom: -20vh;
  } */
`;

const Jumbo: FC = () => (
  <Wrapper>
    <Background className="mg" imageUrl={BackgroundImg} />
    <Foreground className="fg" imageUrl={ForegroundImg} />
    <Clouds className="bg" imageUrl={CloudsImg} />
    <LogoArea>
      <Gear className="gear" src={GearSVG} alt="loading affordance" />
      <Logo src={LogoSVG} alt="company logo" />
    </LogoArea>
  </Wrapper>
);

export default Jumbo;
