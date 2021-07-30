import { render, screen } from '@testing-library/react';
import Badge from "./Badge";

test('renders component badge', () => {
  render(<Badge type="movie" children={'movie'}/>);
  const linkElement = screen.getByText(/movie/i);
  expect(linkElement).toBeInTheDocument();
});
