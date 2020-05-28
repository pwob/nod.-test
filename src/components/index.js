import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fieldTypes from '../lib/fieldMap';
import { FormContainer, Description, Error } from './componentStyles';

const StateHOC = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: false,
      }
    }

    handleChange = (value) => {
      const { name, validator, handleFieldInput } = this.props;
      let error = null;

      if (typeof validator === 'function') {
        error = validator(value);
      }

      this.setState({
        error
      }, () => {
          typeof handleFieldInput === 'function' && handleFieldInput({ value, error, id: name })
      })
    }

    render() {
      const { error } = this.state;
      const { description, value, meta } = this.props;

      return <FormContainer>
        {description && <Description>{description}</Description>}
        <WrappedComponent handleChange={this.handleChange} value={value} {...this.props} {...(meta && { meta })} />
        { error && <Error>{error}</Error> }
      </FormContainer>
    }
  }
}

StateHOC.propTypes = {
  WrappedComponent: PropTypes.symbol,
  options: PropTypes.object,
  validate: PropTypes.func
}

export default ({ type, eventHandlers, ...props }) => {
  const el = fieldTypes[type];

  if (!el) return <div>No renderer for this type. [{type}]</div>;

  const Field = StateHOC(el.field);

  const defaultProps = {
    ...el.defaults, ...eventHandlers 
  }

  return <Field {...props}  {...defaultProps} validator={ el.validator} />;
}
