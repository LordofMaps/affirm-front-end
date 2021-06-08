const supportedCardTypes = [
  {
    name: 'VISA',
    isType: (ccNumber) => /^4/.test(ccNumber),
    isComplete: (ccNumber) => /^4[0-9]{12}(?:[0-9]{3})?$/.test(ccNumber),
    cscCheck: (csc) => csc.length === 3
  },
  {
    name: 'AMEX',
    isType: (ccNumber) => /^3[47]/.test(ccNumber),
    isComplete: (ccNumber) => /^3[47][0-9]{13}$/.test(ccNumber),
    cscCheck: (csc) => csc.length === 4
  },
];

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

export const isCompleteCard = (ccNumber) => supportedCardTypes.some(type => type.isComplete(ccNumber));

export function isCompleteCCNumber(ccNumber) {
  const sanitizedCCNumber = ccNumber.replace(/\D/g, '');
  return isCompleteCard(sanitizedCCNumber) && isMod10(sanitizedCCNumber);
}

export function cardType(ccNumber) {
  const type = supportedCardTypes.find(x => x.isType(ccNumber));
  return (type && type.name) || '';
}

export function isValidCSC(ccNumber, csc) {
  const sanitizedCSC = csc.replace(/\D/g, '');
  const type = supportedCardTypes.find(x => x.isType(ccNumber));
  if (type) {
    return type.cscCheck(sanitizedCSC);
  }
  return false;
}