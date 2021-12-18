module.exports = function toReadable (number) {
  let numbersUnitsList = [
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
      'twenty'
  ];
  let numbersDozensList = [
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
  ];

  let result = '';

  if (number >= 0 && number <= 20) {
      result += numbersUnitsList[number];
  }

  if (number > 20 && number < 100) {
      result += numbersDozensList[Math.floor(number / 10) - 2];

      let numberUnits = number % 10;

      if (numberUnits > 0) {
          result += ' ' + numbersUnitsList[numberUnits];
      }
  }

  if (number >= 100 && number < 1000) {
      result += numbersUnitsList[Math.floor(number / 100)] + ' hundred';

      let numberDozens = number % 100;
      let numberUnits = numberDozens % 10;

      if (numberDozens > 20) {
          result += ' ' + numbersDozensList[Math.floor(numberDozens / 10) - 2];

          if (numberUnits !== 0) {
              result += ' ' + numbersUnitsList[numberUnits];
          }
      } else if (numberDozens !== 0) {
          result += ' ' + numbersUnitsList[numberDozens];
      }
  }

  return result;
}
