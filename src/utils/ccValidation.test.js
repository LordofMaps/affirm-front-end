import { isMod10, cardType, isValidCSC } from './ccValidation';

describe('isMod10', () => {
  test('should return true when passing Luhn Algorithm', () => {
    expect(isMod10('79927398713')).toEqual(true);
    expect(isMod10('1115')).toEqual(true);
    expect(isMod10('1123')).toEqual(true);
  });
  test('should return true for valid Visa', () => {
    expect(isMod10('4242424242424242')).toEqual(true);
  });
  test('should return true for valid Amex', () => {
    expect(isMod10('378282246310005')).toEqual(true);
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
  });
  test('should return false when not given a four digit CSC with an Amex', () => {
    expect(isValidCSC('378282246310005', '11111')).toEqual(false);
  });
})


