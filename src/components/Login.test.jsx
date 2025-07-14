import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

test('shows validation errors when empty form is submitted', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText(/login/i)); // simulate login button click

  expect(await screen.findByText(/required/i)).toBeInTheDocument(); // check for validation message
});
