var
  /*Variables*/
  field,
  firstVal,
  secondVal,
  operator,
  calculationString,

  /*Flags*/
  flagOperator,
  flagLastPress,

  /*FUNCTIONS*/

  /*Auxiliary Services*/
  fieldSvc,
  calculationStringSvc,
  mathSvc,
  save,
  make,
  logger,
  logger2,
  browser,

  /*App Services*/
  reset,
  calculationAction,
  changeCalculationString,
  reciprocCalculationString,
  percentAction,
  specialOperatorProcess,
  clipboardService,

  /*Entities*/
  memory,
  clipboard,

  /*View Layout*/
  view,
  notification,
  notificationTimeout,

  /*Handler Services*/
  numPress,
  operatorPress,
  equallyPress,
  plusMinusPress,
  percentPress,
  reciprocPress,
  squareRootPress,
  backspacePress,
  clearErrorPress

  ;