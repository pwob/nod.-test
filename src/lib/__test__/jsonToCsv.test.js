import toCsv from '../jsonToCsv';

describe('json to csv helper', () => {
  it('should turn json to csv', () => {
    const json = [{ "test": "hello", "number": 1 }]
    const expected = 'test,number\r\n"hello",1'
    const csv = toCsv(json);
    
    expect(csv).toEqual(expected);
  })
})