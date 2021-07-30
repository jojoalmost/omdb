import { render, screen } from '@testing-library/react';
import Alert from "./Alert";

test('renders component alert', () => {
  render(<Alert type='error' children={'this is alert'}/>);
  const linkElement = screen.getByText(/this is alert/i);
  expect(linkElement).toBeInTheDocument();
});
