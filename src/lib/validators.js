import isEmail from 'isemail'
import PhoneNumber from 'awesome-phonenumber';

function validator () {
  const methods = {};
  const messages = {
    email: 'Please enter a valid e-mail address.',
    mobileNumber: 'Please enter a valid phone number, make sure country code is correct.',
    name: 'Please enter a valid name.',
    empty: 'This field is required',
  }
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g

  methods.empty = (test) => {
    const type = typeof test;
    let valid = true;

    if (type === 'object') {
      const isArray = Array.isArray(test)

      if (isArray) {
        valid = test.length > 0;
      }

      valid = Object.keys(test).length > 0;
    }

    if (type === 'string') {
      valid = test.slice(1,-1).length > 0;
    }

    return valid ? null : messages.empty;
  };

  methods.email = (test) => {
    return isEmail.validate(test) ? null : messages.email;
  };

  methods.name = (test) => {
    return test.match(nameRegex) ? null : messages.name;
  }

  methods.number = (test) => {
    return test.match(/^[0-9]*$/) ? null : messages.name;
  }
  
  methods.mobileNumber = (test) => {
    let pn = new PhoneNumber(test);
    const isMobile = pn.isMobile();

    return isMobile && pn.isValid() ? null : messages.mobileNumber
  };

  return methods
};

export default validator()