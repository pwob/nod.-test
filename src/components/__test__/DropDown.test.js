import React from 'react';
import { render } from '@testing-library/react';
import DropDown from '../DropDown';

test('renders an input with date type and label', () => {
  const { getByLabelText } = render(<DropDown name="Test" id="date-test" />);
  const labelNode = getByLabelText(/Test/i);

  expect(labelNode).toBeInTheDocument();
});
