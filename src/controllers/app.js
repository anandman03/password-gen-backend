const numericCharacterSet = '0123456789';
const lowerCharacterSet = 'abcdefghijklmnopqrstuvwxyz';
const upperCharacterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbolCharacterSet = '!"#$%&()*-/+.,:;<=>?@[]^_~`{}|';

exports.generatePassword = (request, response) => {
  const {
    length, isUpperCase, isNumeric, isSymbol,
  } = request.body;

  if (length < 6 || length > 50) {
    return response.status(403).json({ message: 'password length between 6 and 50' });
  }
  if (isUpperCase === undefined || isNumeric === undefined || isSymbol === undefined) {
    return response.status(403).json({ message: 'null parameters' });
  }

  let characterSet = lowerCharacterSet;
  if (isUpperCase === 1) {
    characterSet += upperCharacterSet;
  }
  if (isNumeric === 1) {
    characterSet += numericCharacterSet;
  }
  if (isSymbol === 1) {
    characterSet += symbolCharacterSet;
  }

  let password = '';
  for (let counter = 0; counter < length; counter += 1) {
    const index = Math.floor(Math.random() * characterSet.length);
    password += characterSet[index];
  }
  return response.status(201).json({ message: password });
};
