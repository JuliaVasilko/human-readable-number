module.exports = function toReadable (number) {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty ',
    30: 'thirty ',
    40: 'forty ',
    50: 'fifty ',
    60: 'sixty ',
    70: 'seventy ',
    80: 'eighty ',
    90: 'ninety ',
    getDozens(num) {
			if (num === 0) {
				return ''
			} else if (num < 20) {
            return this[num];
      } else {
          const roundedDozen = Math.floor(num / 10) * 10;
					return this[roundedDozen];
      }
    },
    getHundreds(num) {
			if (num === 0) {
				return ''
			};

      return `${this[num]} hundred `
    },
  }

	if(number < 20) {
    return numbers[number].trim();
  }

  function getUnits(num) {
    if (num === 0) {
        return '';
    } else {
        return numbers[num];
    }
  }

	function getFinalString(hun = '', doz = '', un) {
		return (hun + doz + un).trim();
	}

  const hundreds = numbers.getHundreds(Math.floor(number / 100));
  const dozens = numbers.getDozens(number % 100);
  const units = number % 100 < 20 ? '' : getUnits(number % 10);

	return getFinalString(hundreds, dozens, units)
}
