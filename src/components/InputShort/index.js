import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './InputShortStyles';

const InputShort = ({ handleChange, id, name, ...props }) => {
  return (
    <>
      <Label>{name}: </Label>
      <Input onChange={({ target }) => handleChange(target.value, id)} {...props} />
    </>
  )
};

InputShort.propTypes = {
  handleChange: PropTypes.func
}

export default InputShort;
