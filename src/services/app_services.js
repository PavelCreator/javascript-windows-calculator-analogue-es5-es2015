reset = function () {
  field = 0;
  firstVal = undefined;
  secondVal = undefined;
  operator = undefined;
  calculationString = [];
  flagOperator = false;
  renewField();
  resetCalculationString();
}

calculationAction = function (operator) {
  logger();
  if (flagLastPress === "equally") {
    secondVal = parseFloat(calculationString[calculationString.length - 2]);

    switch (operator) {
      case "plus":
        field += parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "minus":
        field -= parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "multiply":
        field *= parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "divide":
        field /= parseFloat(calculationString[calculationString.length - 2]);
        break;

      case "percent":
        console.log(calculationString[calculationString.length - 1]);
        /*field = firstVal * secondVal*firstVal/100;*/
        break;
    }
    renewField();
  } else {
    switch (operator) {
      case "plus":
        field = firstVal + secondVal;
        break;

      case "minus":
        field = firstVal - secondVal;
        break;

      case "multiply":
        field = firstVal * secondVal;
        break;

      case "divide":
        if (secondVal !== 0) {
          field = firstVal / secondVal;
        } else {
          reset();
          field = "Error. Division by zero";
          renewField();
          return false;
        }
        break;

      case "percent":
        console.log(calculationString[calculationString.length - 1]);
        /*field = firstVal * secondVal*firstVal/100;*/
        break;
    }
    secondVal = 0;
  }
  renewField();
  firstVal = field;
  /*  logger2();*/
}

changeCalculationString = function (operator, lastNum) {
  if (flagLastPress === "equally") {
    calculationString.splice(-1, 1);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push(calculationString[calculationString.length - 2]);
    calculationString.push("=");
    string = "";
    for (var i = 0; i < calculationString.length; i++) {
      string = string + " " + calculationString[i];
    }
    string = string.substr(1);
    if (string.length > 34) {
      string = "<< " + string.substr(-34, 34);
    }
    document.getElementById("calculation-string").innerHTML = string;
  } else {
    if (!lastNum) {
      if (field >= 0) {
        calculationString.push(field.toString());
      } else {
        calculationString.push("(" + field.toString() + ")");
      }
    }
    var sign, string = '';
    switch (operator) {
      case "plus":
        sign = "+";
        break;

      case "minus":
        sign = "-";
        break;

      case "multiply":
        sign = "*";
        break;

      case "divide":
        sign = "/";
        break;

      case "equally":
        sign = "=";
        break;
    }
    calculationString.push(sign);
    for (var i = 0; i < calculationString.length; i++) {
      string = string + " " + calculationString[i];
    }
    string = string.substr(1);
    if (string.length > 34) {
      string = "<< " + string.substr(-34, 34);
    }
    document.getElementById("calculation-string").innerHTML = string;
  }
}