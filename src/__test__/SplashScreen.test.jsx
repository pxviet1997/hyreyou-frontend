import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SplashScreen from 'src/pages/SplashScreen';
import { MemoryRouter } from 'react-router';
import theme from 'src/theme';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import { createMemoryHistory } from 'history'
import App from 'src/App';
import { Provider } from 'react-redux';
import store from 'src/redux/store';

test('Sign In Label is correct', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SplashScreen />
      </ThemeProvider>
    </MemoryRouter>
  );
  const signInBtn = getByTestId('loginBtn');
  expect(signInBtn.textContent).toBe('Sign In');
});

test('Sign Up Label is correct', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SplashScreen />
      </ThemeProvider>
    </MemoryRouter>
  );
  const signInBtn = getByTestId('signupBtn');
  expect(signInBtn.textContent).toBe('Sign Up');
});

// test('Landing on 404', () => {
//   const history = createMemoryHistory();
//   history.push('/40f4');
//   render(
//     <MemoryRouter history={history}>
//       <Provider store={store}>
//         <SplashScreen />
//       </Provider>
//     </MemoryRouter>,
//   );

//   expect(screen.getByText('404: The page you are looking for isn’t here')).toBeInTheDocument()
// });
