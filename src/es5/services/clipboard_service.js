"use strict";
ClipboardService = {
  pastedTextValidation: function (pastedText) {
    if (pastedText.match(/^[0-9\.,]+$/) == null) {
      Notification.warning("Data from clipboard is not a number");
    } else {
      if (pastedText.indexOf(",") != -1) {
        pastedText = pastedText.replace(/,/g, ".")
      }
      var dotCount = 0;
      for (i = 0; i < pastedText.length; i++) {
        if (pastedText.charAt(i) == ".") {
          dotCount++;
        }
      }
      if (dotCount > 1) {
        Notification.warning("Data from clipboard is not a number");
      } else {
        if (pastedText.charAt(0) == ".") {
          pastedText = "0" + pastedText;
        }
        return true;
      }
    }
  }
}