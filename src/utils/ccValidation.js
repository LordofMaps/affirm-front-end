// Implemntation of Luhn Algorithm https://en.wikipedia.org/wiki/Luhn_algorithm
export function isMod10(ccNumber) {
  const ccDigits = ccNumber.split('');
  const sum = ccDigits.reverse().reduce((total, d, i) => {
    let digit = parseInt(d);
    if (i % 2 === 1) {
      digit *= 2;
      digit = digit > 9 ? digit - 9 : digit;
    }
    return total + digit;
  }, 0);
  return (sum % 10) === 0;
}

export const isVisa = (ccNumber) => /^4/.test(ccNumber);
export const isCompleteVisa = (ccNumber) => /^4[0-9]{12}(?:[0-9]{3})?$/.test(ccNumber);

export const isAmex = (ccNumber) => /^3[47]/.test(ccNumber);
export const isCompleteAmex = (ccNumber) => /^3[47][0-9]{13}$/.test(ccNumber);

export const isCompleteCard = (ccNumber) => [isCompleteVisa, isCompleteAmex].some(func => func(ccNumber));

export function isCompleteCCNumber(ccNumber) {
  const sanitizedCCNumber = ccNumber.replace(/\D/g, '');
  return isCompleteCard(sanitizedCCNumber) && isMod10(sanitizedCCNumber);
}

export function cardType(ccNumber) {
  if (isAmex(ccNumber)) {
    return 'AMEX';
  }
  if (isVisa(ccNumber)) {
    return 'VISA';
  }
  return '';
}

export function isValidCSC(ccNumber, csc) {
  const sanitizedCSC = csc.replace(/\D/g, '');
  const type = cardType(ccNumber);
  if (type === 'AMEX') {
    return sanitizedCSC.length === 4;
  }
  if (type === 'VISA') {
    return sanitizedCSC.length === 3;
  }
  return false;
}