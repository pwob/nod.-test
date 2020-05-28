import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Label, Parts, PartsContainer, Input} from './InputLongStyles';

const InputLong = ({ parts, value, id, handleChange, name, ...props }) => {
  // Defaults to address parts?? 
  const _parts = parts || [];

  const [partValues, setPartValues] = useState(_parts.map(part => { return { id: part.id, value: null } }));

  const handlePartValueChange = (value, id, validate) => {
    let toSet = partValues.map(field => {
      if (field.id === id) {
        field.value = value
      }

      return field
    })

    setPartValues(toSet);
    handleChange(toSet.map(field => field.value).filter(Boolean).join(', '))
  }

  return <>
    <Label>{name}: </Label>
    <PartsContainer>
      {
        _parts.map((part, index) => {
          return <Parts key={part.id}>
            <Label htmlFor={part.id}>{part.name}</Label>
            <Input onChange={({target}) => handlePartValueChange(target.value, part.id, part.validator)} id={part.id} {...props} />
          </Parts>
        })
      }
    </PartsContainer>
  </>
}

InputLong.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  parts: PropTypes.array
}

export default InputLong;
