import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders title "battleship" somewhere', () => {
  render(<App />);
  const linkElement = screen.getByText(/battleship/i);
  expect(linkElement).toBeInTheDocument();
});
