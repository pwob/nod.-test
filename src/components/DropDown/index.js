import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Options, Select, Selected, Multi, Label, Chosen } from './DropDownStyles'

const DropDown = ({ handleChange, value, id, name, options, meta, ...props }) => {
  const { multiple } = meta || {};
  const [selected, setSelected] = useState(new Set());
  const [selections, setSelections] = useState(options || []);

  const handleSelect = (item) => {
    let toSet = selected;

    if (multiple) {
      toSet.add(item)

      setSelections(options.filter(option => ![...toSet].includes(option)))
    } else {
      toSet = [item]
    };

    handleChange([...toSet], id)
    setSelected(toSet)
  }

  const handleDeselect = (item) => {
    let toSet = selected;

    if (multiple) {
      toSet.delete(item)

      setSelections(options.filter(option => ![...toSet].includes(option)))
    }

    handleChange([...toSet], id)
    setSelected(toSet)
  }

  return (
    <Multi>
      <Label htmlFor={id}>{name}: </Label>
      <Select id={id}>
        <Selected>
          {
            [...selected].map(item => {
            return <Chosen key={item}>{item} { multiple && <span onClick={() => handleDeselect(item)}/> }</Chosen>
            })
          }
        </Selected>
        <Options>
          {
            selections.map(option => {
              return <span key={option} onClick={() => handleSelect(option)}>{option}</span>
            })
          }
        </Options>
      </Select>
    </Multi>
  )
};

DropDown.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  meta: PropTypes.object
}

export default DropDown;
