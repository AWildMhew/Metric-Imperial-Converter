
function checkDiv(possibleFraction){
  var number = possibleFraction + ''
  let nums = number.split("/")
  if (nums.length > 2){
    return false
  } 
  return nums
}

function ConvertHandler() {
  // GET NUMBER HERE
  this.getNum = function(input) {
    let result;

    result = input.match(/[.\d\/]+/g) || 1;
    let nums = checkDiv(result);

    if (!nums) {
      return undefined
    }

    let num1 = nums[0]
    let num2 = nums[1] || "1"

    result = parseFloat(num1) / parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
      return undefined
    }
    
    return result;
  };
  // GET UNIT HERE
  this.getUnit = function(input) {
    let result;
    
    result = input.toLowerCase().match(/[a-zA-Z]+/)
    result = result.toString()

    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']

    if (units.includes(result)){
      if (result == 'l'){
        return 'L'
      }
      return result
    } else return undefined
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if (initUnit == 'gal') {
      result = 'L'
    }
    else if (initUnit == 'L') {
      result = 'gal'
    }
    if (initUnit == 'lbs'){
      result = 'kg'
    }
    else if (initUnit == 'kg'){
      result = 'lbs'
    }
    if (initUnit == 'mi'){
      result = 'km'
    }
    else if (initUnit == 'km'){
      result = 'mi'
    }
    return result;
  };
// SPELL OUT HERE
  this.spellOutUnit = function(unit) {
    let result;

    unit = unit.toLowerCase()

    if (unit == 'gal') {
      result = 'gallons'
    }
    else if (unit == 'l') {
      result = 'liters'
    }
    if (unit == 'lbs'){
      result = 'pounds'
    }
    else if (unit == 'kg'){
      result = 'kilograms'
    }
    if (unit == 'mi'){
      result = 'miles'
    }
    else if (unit == 'km'){
      result = 'kilometers'
    }
    
    return result;
  };
  // CONVERT NUMBER HERE
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (initUnit == 'gal') {
      result = initNum * galToL
    }
    else if (initUnit == 'L') {
      result = initNum / galToL
    }
    if (initUnit == 'lbs'){
      result = initNum * lbsToKg
    }
    else if (initUnit == 'kg'){
      result = initNum / lbsToKg
    }
    if (initUnit == 'mi'){
      result = initNum * miToKm
    }
    else if (initUnit == 'km'){
      result = initNum / miToKm
    }
    
    return Math.round((result + Number.EPSILON) * 100000) / 100000;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    return result;
  };
  
}

module.exports = ConvertHandler;
