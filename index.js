function cardValidator(cardNumber) {
  if(cardNumber === '') {
    throw new Error('The card number is empty, insert a card number');
  } else if (typeof(cardNumber) === 'string') {
    throw new Error('The card number contains quotes, a text or special character, insert only numbers without quotes');
  } else if (cardNumber % 1 !== 0) {
    throw new Error('The card number is float, insert only integer numbers');
  } else if (cardNumber.toString().length === 1) {
    throw new Error('The card number has only one digit, insert a number greater than one digit');
  } else {
    return toCheckCard(cardNumber);
  }
}

function toCheckCard(cardNumber) {
  cardNumber = cardNumber.toString();
  var cardNumberInReverseArray = convertStrToReverseArray(cardNumber);
  var numbersToSum = getNumbersToSum(cardNumberInReverseArray);
  var totalSum = toSumDigitsOfArray(numbersToSum);
  return (totalSum % 10 === 0) ? true : false;
}

function convertStrToReverseArray(str) {
  var strInArray = str.split('');
  return strInArray.reverse();
}

function getNumbersToSum(cardNumberInReverseArray) {
  var numbersToSum = [];
  cardNumberInReverseArray.map((num, i) => {
    if(i % 2 !== 0) {
      var evenPosition = num * 2;
      if(evenPosition >= 10) {
        evenPosition = convertNumberInArray(evenPosition);
        var digitsSum = toSumDigitsOfArray(evenPosition);
        numbersToSum.push(digitsSum);
      } else {
        numbersToSum.push(evenPosition);
      }
    } else {
      numbersToSum.push(parseInt(num));
    }
  });
  return numbersToSum;
}

function convertNumberInArray(num) {
  return num.toString().split('');
}

function toSumDigitsOfArray(digits) {
  return convertElmentsOfArrayInNumber(digits)
    .reduce((total, num) => total + num);
}

function convertElmentsOfArrayInNumber(arr) {
  return arr.map(el => parseInt(el));
}

module.exports = cardValidator;