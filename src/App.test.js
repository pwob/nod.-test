import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App base component', () => {
  test('should renders save button', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Save/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render fields according to data passed', () => {
    const testData = [
      {
        name: 'Age',
        type: 'short-text',
        id: 1,
      },
      {
        name: 'Marital Status',
        type: 'short-text',
        id: 2,
      },
    ]

    const { getByText } = render(<App source={testData}/>);
    const ageNode = getByText(/Age/i);
    const maritalnode = getByText(/Marital Status/i);

    expect(ageNode).toBeInTheDocument();
    expect(maritalnode).toBeInTheDocument();
  })
})
