import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

test('redirects unauthenticated users to the login page', () => {
  localStorage.removeItem('token');
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  const heading = screen.getByRole('heading', { name: /login/i });
  expect(heading).toBeInTheDocument();
});
