import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders What you want to be done? on screen', () => {
  render(<App />);
  const linkElement = screen.getByText("What you want to be done?");
  expect(linkElement).toBeInTheDocument();
});
