import React from 'react';
import { render } from '@testing-library/react';
import DatePicker from '../DatePicker';

test('renders an input with date type and label', () => {
  const { getByLabelText } = render(<DatePicker name="Test" id="date-test"/>);
  const labelNode = getByLabelText(/Test/i);

  expect(labelNode).toBeInTheDocument();
});
