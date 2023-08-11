import { render, screen } from '@testing-library/react';
import App from './';

test('renders ‘hello, world’', () => {
  render(<App />);
  const container = screen.getByText(/hello, world/i);
  expect(container).toBeInTheDocument();
});
