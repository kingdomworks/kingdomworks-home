import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { appTheme, rootStyle } from './theme';
import Landing from './landing/Landing';
import Menu from './components/Menu';
import Apps from './apps/Apps';
import Consulting from './consulting/Consulting';

document.head.insertAdjacentHTML('beforeend', rootStyle);

const Wrapper = styled.div`
  padding-bottom: 10vh;
`;

const App = () => (
  <Wrapper>
    <ThemeProvider theme={appTheme}>
      <HashRouter>
        <Menu />
        <Routes>
          <Route index path="/*" element={<Landing />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </Wrapper>
);

export default App;
