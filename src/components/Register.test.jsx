import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';

test('register validation shows error when passwords mismatch', async () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByPlaceholderText(/name/i), {
    target: { value: 'Manita' },
  });

  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: 'pass123' },
  });

  fireEvent.change(screen.getByPlaceholderText(/confirm password/i), {
    target: { value: 'pass321' },
  });

  fireEvent.click(screen.getByText(/register/i));

  expect(await screen.findByText(/passwords must match/i)).toBeInTheDocument();
});
