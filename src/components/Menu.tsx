import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: #fafafa;
  width: 100%;
  height: 10vh;
  min-height: 75px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  font-size: 5vw;
  line-height: 1.2;
  width: var(--screen-xsm);

  @media only screen and (orientation: landscape) {
    font-size: 3vw;
  }

  @media only screen and (min-width: ${p => p.theme.sizes.phone}), (orientation: landscape) and (min-width: ${p => p.theme.sizes.phone}) {
    font-size: 2.5vw;
    text-align: center;
  }

  @media only screen and (min-width: ${p => p.theme.sizes.reg}) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Menu = () => (
  <Nav>
    <Header>We build high quality software, and help others do the same.</Header>
  </Nav>
);

export default Menu;
