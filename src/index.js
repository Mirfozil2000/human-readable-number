module.exports = function toReadable(num) {
  if (typeof num !== 'number' || num < 0 || num > 999) {
    throw new Error('Not implemented');
  }

  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let number = num;
  if (number === 0) return 'zero';
  let result = '';

  if (number >= 100) {
    result += `${ones[Math.floor(number / 100)]} hundred`;
    number %= 100;
    if (number > 0) {
      result += ' ';
    }
  }

  if (number >= 20) {
    result += `${tens[Math.floor(number / 10)]}`;
    if (number % 10 > 0) {
      result += ` ${ones[number % 10]}`;
    }
  } else if (number >= 10) {
    result += `${teens[number - 10]}`;
  } else if (number > 0) {
    result += `${ones[number]}`;
  }

  return result;
};
