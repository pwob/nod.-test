import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './DatePickerStyles';

const DatePicker = ({ handleChange, value, id, name, ...props }) => {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <Input
        id={id}
        type={'date'} 
        onChange={({ target }) => handleChange(target.value, id)} 
        defaultValue={value} 
        {...props} 
      />
    </>
  )
};

DatePicker.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DatePicker;
