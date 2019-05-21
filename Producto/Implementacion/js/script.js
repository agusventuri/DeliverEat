$(function() {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) === false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) === 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) === 'amex') {
            alert("Error - Usted ingreso tarjeta American Express, solo tarjeta Visa")
            
        } else if ($.payform.parseCardType(cardNumber.val()) === 'mastercard') {
            alert("Error - Usted ingreso tarjeta Mastercard, solo tarjeta Visa")
            
        }
    });

    confirmButton.click(function(e) {

        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

      if (owner.val().length < 5) {
        alert("Nombre de Titular Erroneo");
      } else if (!isCardValid) {
        alert("Numero de Tarjeta Incorrecto");
      } else if (!isCvvValid) {
        alert("CVV Invalido");
      }    
    });
});
