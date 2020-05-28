import validator from '../validators';

describe('field validators', () => {
  it('should validate mobile number', () => {
    const result = validator.mobileNumber("09173124753")
    const expected = 'Please enter a valid phone number, make sure country code is correct.'

    expect(result).toEqual(expected);
  })

  it('should validate email', () => {
    const result = validator.email("not email")
    const expected = 'Please enter a valid e-mail address.'

    expect(result).toEqual(expected);
  })

  it('should validate empty string', () => {
    const result = validator.empty('')
    const expected = 'This field is required'

    expect(result).toEqual(expected);
  })

  it('should validate empty array', () => {
    const result = validator.empty([])
    const expected = 'This field is required'

    expect(result).toEqual(expected);
  })
})