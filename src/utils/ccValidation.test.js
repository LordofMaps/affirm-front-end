import { isMod10, cardType, isValidCSC } from './ccValidation';

describe('isMod10', () => {
  test('should return true when passing the Luhn Algorithm', () => {
    expect(isMod10('79927398713')).toEqual(true);
    expect(isMod10('1115')).toEqual(true);
    expect(isMod10('1123')).toEqual(true);
    expect(isMod10('18')).toEqual(true);
  });
  test('should return false when failing the Luhn Algorithm', () => {
    expect(isMod10('79927398712')).toEqual(false);
    expect(isMod10('1116')).toEqual(false);
    expect(isMod10('1124')).toEqual(false);
    expect(isMod10('9')).toEqual(false);
  });
  test('should return true for valid Visa', () => {
    expect(isMod10('4242424242424242')).toEqual(true);
  });
  test('should return true for valid Amex', () => {
    expect(isMod10('378282246310005')).toEqual(true);
  });
  test('should return false for invalid Amex', () => {
    expect(isMod10('378282246310004')).toEqual(false);
  });
})

describe('cardType', () => {
  test('should return VISA when given a Visa', () => {
    expect(cardType('4242424242424242')).toEqual('VISA');
  });
  test('should return AMEX when given an Amex', () => {
    expect(cardType('378282246310005')).toEqual('AMEX');
  });
})

describe('isValidCSC', () => {
  test('should return true when given a three digit CSC with a Visa', () => {
    expect(isValidCSC('4242424242424242', '101')).toEqual(true);
  });
  test('should return true when given a four digit CSC with an Amex', () => {
    expect(isValidCSC('378282246310005', '1111')).toEqual(true);
  });
  test('should return false when not given a three digit CSC with a Visa', () => {
    expect(isValidCSC('4242424242424242', '10')).toEqual(false);
    expect(isValidCSC('4242424242424242', '1011')).toEqual(false);
  });
  test('should return false when not given a four digit CSC with an Amex', () => {
    expect(isValidCSC('378282246310005', '11')).toEqual(false);
    expect(isValidCSC('378282246310005', '11111')).toEqual(false);
  });
})


