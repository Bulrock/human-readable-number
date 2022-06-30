module.exports = function toReadable (number) {
  var result = '';
  if (number > 99){
    let countOfHundreds = (Math.floor(number/100));
    var arrayHundreds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var countOfHundred = arrayHundreds [countOfHundreds-1];
    result = `${countOfHundred}${' hundred'}`;
  };
  
  if (99 >= number % 100 && number % 100 >= 20) {
    let countOfTens = (Math.floor((number % 100)/10));
    var arrayTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var countOfTen = arrayTens [countOfTens-2];
    result = `${result}${' '}${countOfTen}`;
  };

  if (99 >= number % 100 && number % 100 >= 20 && ((number % 100) % 10) > 0) {
    let countOfTenEvens = (number % 100) % 10;
    var arrayTenEvens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var countOfTenEven = arrayTenEvens [countOfTenEvens-1];
    result = `${result}${' '}${countOfTenEven}`;
  };

  if (0 < number % 100 && number % 100 < 20) {
    let countOfEvens = (number % 100);
    var arrayEvens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var countOfEven = arrayEvens [countOfEvens-1];
    result = `${result}${' '}${countOfEven}`;
  };

  if (number < 100 && result.length < 15) {
    result = result.slice(1, result.length);
  }
  
  if (number === 0) {
    result = 'zero';
  }
  
  return result;
}