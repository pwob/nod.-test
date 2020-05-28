
import InputShort from '../components/InputShort';
import DatePicker from '../components/DatePicker';
import DropDown from '../components/DropDown';
import InputLong from '../components/InputLong';

import validator from './validators';

// Configure fields, make it read only
export default Object.freeze({
  'short-text': {
    field: InputShort,
    defaults: {},
    validator: validator.name,
  },
  'long-text': {
    field: InputLong,
    // Default to address??
    defaults: {
      parts: [
        {
          id: 'address_line_1',
          name: 'Line 1',
          validator: validator.empty,
        },
        {
          id: 'address_line_2',
          name: 'Line 2',
          validator: validator.empty,
        },
        {
          id: 'address_city',
          name: 'City',
          validator: validator.empty,
        },
        {
          id: 'address_country',
          name: 'Country',
          validator: validator.empty,
        },
        {
          id: 'address_postal_code',
          name: 'Postal Code',
          validator: validator.number,
        }
      ]
    },
    validator: validator.empty,
  },
  'phone-number': {
    field: InputShort,
    defaults: {},
    validator: validator.mobileNumber,
  },
  'email': {
    field: InputShort,
    defaults: {},
    validator: validator.email,
  },
  'date': {
    field: DatePicker,
    defaults: {},
    validator: null,
  },
  'dropdown': {
    field: DropDown,
    defaults: {},
    validator: validator.empty,
  },
  'multi-select': {
    field: DropDown,
    defaults: {
      meta: {
        multiple: true,
      }
    },
    validator: validator.empty,
  }
});
