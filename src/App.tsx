import styled, { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { appTheme, rootStyle } from './theme';
import Landing from './landing/Landing';
import Menu from './components/Menu';
import Apps from './apps/Apps';
import Consulting from './consulting/Consulting';

document.head.insertAdjacentHTML('beforeend', rootStyle);

const Wrapper = styled.div`
  padding-bottom: 10vh;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/apps',
    element: <Apps />,
  },
  {
    path: '/consulting',
    element: <Consulting />,
  },
]);

const App = () => (
  <Wrapper>
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
      <Menu />
    </ThemeProvider>
  </Wrapper>
);

export default App;
