import styled, { ThemeProvider } from 'styled-components';

import { appTheme, rootStyle } from './theme';
import Landing from './landing/Landing';
import Menu from './components/Menu';

document.head.insertAdjacentHTML('beforeend', rootStyle);

const Wrapper = styled.div`
  padding-bottom: 10vh;
`;

const App = () => (
  <Wrapper>
    <ThemeProvider theme={appTheme}>
      <div>
        <Landing />
        <Menu />
      </div>
    </ThemeProvider>
  </Wrapper>
);

export default App;
