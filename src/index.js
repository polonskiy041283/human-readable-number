module.exports = function toReadable (number) {

    if (number === 0) return 'zero'
  
    const arr10 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arr100 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arr11 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    function one(number) {
      for (let i = 0; i <= 9; i++) {
        if (number === i) {
          return arr10[i];
        }
      }
    } 
  
    function dozUpTo20(number) {
      for (let i = 10; i < 20; i++) {
        if (number === i) {
          return arr11[i - 10];
        }
      }
    }
  
    function dozMoreThan20(number) {
      let nStr = String(number);
      for (let i = 2; i <= 9; i++) {
        if (Number(nStr[0]) === i) {
          for (let y = 0; y <= 9; y++) {
            if (Number(nStr[1]) === 0) { // убираем ПРОБЕЛ ПОСЛЕ десятых
              return `${arr100[i]}${one(y)}`;
            }   
            else if (Number(nStr[1]) === y) {
              return `${arr100[i]} ${one(y)}`;
            }
          }
        }
      }
    }
  
    function hundreds(number) {
      let firstN = Number(String(number)[0]);
      let restN = Number(String(number).slice(1));
      if (restN === 0) { // убираем ПРОБЕЛ ПОСЛЕ hundred
        return `${one(firstN)} hundred${one(restN)}`;  
      } else if (restN >= 20) {
          return `${one(firstN)} hundred ${dozMoreThan20(restN)}`;
      } else if (restN >= 10) {
          return `${one(firstN)} hundred ${dozUpTo20(restN)}`;
      } else {
          return `${one(firstN)} hundred ${one(restN)}`;
  
      }
    }
  
  function last3Digits(num) {
  
    if ((String(num)).length === 1) {
      return one(num);
    } else if (num < 20 && num >= 10) {
        return dozUpTo20(num);
    } else if (num >= 20 && (String(num)).length === 2) {
        return dozMoreThan20(num);  
    } else if ((String(num)).length === 3) {
        return hundreds(num); 
    }
  }
  
  function human(n) {
  let l = String(n).length;
  let first3 = Number(String(n).slice(0, l - 3));
  let last3 = Number(String(n).slice(l - 3));
  
    if (l > 3 && Number(String(first3)[2]) === 0 && Number(String(first3)[1]) != 1) {
      return `${last3Digits(first3)}thousand ${last3Digits(last3)}`.split(' ').join(' ');
    }
    else if (l > 3) {
      return `${last3Digits(first3)} thousand ${last3Digits(last3)}`.split(' ').join(' ');
    } else if (l === 3) {
        return hundreds(n)
    } else if (l === 1) {
        return one(n)
    } else if (n >= 10 && n < 20) {
      return dozUpTo20(n)
    } else {
      return dozMoreThan20(n);
    }
  }
  return human(number);
  }