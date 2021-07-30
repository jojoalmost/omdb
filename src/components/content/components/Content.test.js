import { render, screen } from '@testing-library/react';
import Content from "./Content";

test('renders component content', () => {
  render(<Content><h1>this is main content</h1></Content>);
  const linkElement = screen.getByText(/this is main content/i);
  expect(linkElement).toBeInTheDocument();
});
