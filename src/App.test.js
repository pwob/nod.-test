import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders save button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Save/i);
  expect(linkElement).toBeInTheDocument();
});
