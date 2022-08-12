module.exports = function toReadable (number) {
let num = 45; 
let arr = Array.from(num.toString());
let len = arr.length;
let num0 = Number(arr[0]);
let num1 = Number(arr[1]);
let num2 = Number(arr[2]);

if (len === 1) {
    console.log(units(num0));
}
else if (len === 2) {
    if (num > 19) {
        console.log(dozens(num0), units(num1));
    }
    else {
        console.log(especial(num));
    }
}
else if (len === 3){
    let str = num1.toString() + num2.toString();
    let separated_num = Number(str);

    if (separated_num > 19) {
        console.log(units(num0),'hundred', dozens(num1), units(num2));
    }
    else if (separated_num >= 10){
        console.log(units(num0), 'hundred', especial(separated_num));
    }
    else {
        console.log(units(num0), 'hundred', units(num2));
    }
}

function units(num0) {
    let res_units = '';
    switch(num0) {
        case 1:  res_units += 'one'; break;
        case 2:  res_units += 'two'; break;
        case 3:  res_units += 'three'; break;
        case 4:  res_units += 'four'; break;
        case 5:  res_units += 'five'; break;
        case 6:  res_units += 'six'; break;
        case 7:  res_units += 'seven'; break;
        case 8:  res_units += 'eight'; break;
        case 9:  res_units += 'nine'; break;
    }
    return res_units;
}
function dozens(num0) {
    let res_dozens = '';
    switch(num0) {
        case 2:  res_dozens += 'twenty'; break;
        case 3:  res_dozens += 'thirty'; break;
        case 4:  res_dozens += 'fourty'; break;
        case 5:  res_dozens += 'fifty'; break;
        case 6:  res_dozens += 'sixty'; break;
        case 7:  res_dozens += 'seventy'; break;
        case 8:  res_dozens += 'eighty'; break;
        case 9:  res_dozens += 'ninety'; break;
    }
    return res_dozens;
}
function especial(num) {
    let res_especial = '';
    switch(num) {
        case 10:  res_especial += 'ten'; break;
        case 11:  res_especial += 'eleven'; break;
        case 12:  res_especial += 'twelve'; break;
        case 13:  res_especial += 'thirteen'; break;
        case 14:  res_especial += 'fourteen'; break;
        case 15:  res_especial += 'fifteen'; break;
        case 16:  res_especial += 'sixteen'; break;
        case 17:  res_especial += 'seventeen'; break;
        case 18:  res_especial += 'eightteen'; break;
        case 19:  res_especial += 'nineteen'; break;
    }
    return res_especial;
}
}