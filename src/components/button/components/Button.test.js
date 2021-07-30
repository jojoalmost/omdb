import { render, screen } from '@testing-library/react';
import Button from "./Button";

test('renders component button', () => {
  render(<Button type="movie" onClick={jest.fn()} children={'click here'}/>);
  const linkElement = screen.getByText(/click here/i);
  expect(linkElement).toBeInTheDocument();
});
