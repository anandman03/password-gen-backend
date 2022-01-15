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
  characterSet += (isUpperCase === 1) ? upperCharacterSet : '';
  characterSet += (isNumeric === 1) ? numericCharacterSet : '';
  characterSet += (isSymbol === 1) ? symbolCharacterSet : '';

  let password = '';
  const maxLimit = characterSet.length;
  for (let counter = 0; counter < length; counter += 1) {
    const index = Math.floor(Math.random() * maxLimit);
    password += characterSet[index];
  }
  return response.status(201).json({ message: password });
};
