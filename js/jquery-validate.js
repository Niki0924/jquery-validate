(function($) {
    'use strict';
    // Regex validation rules
    var validate = {
        required: /./,
        name: /^[A-Za-z ,'-]{1,25}$/,
        email: /^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,})$/,
        zipcode: /^\d{5}(?:[-\s]\d{4})?$/,
        postalcode: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
        telephone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    }

    // Error messages after validation rules
    var errorMessage = {
        required: 'This field is required',
        name: 'A valid name is required',
        email: 'A valid email address is required',
        zipcode: 'A valid zip code is required',
        postalcode: 'A valid postal code is required',
        telephone: 'A valid telephone number is required',
    }

    // find all form elements on page
    $('input, select, textarea').each(function () {
        var attr = $(this).attr('data-validate');
        var fieldId = $(this).attr('id');

        if (typeof attr !== 'undefined' && attr !== false) {

            var validation = $(this).data('validate').split(',');

            // wrap inputs and label in div field item
            $(this).prev('label').andSelf().wrapAll('<div class="field-item"/>');

            // check data attribute for validation rules
            for (var i = 0; i < validation.length; i++){
                // add error messages to markup
                var type = validation[i];
                type = type.replace(' ', '');
                $('#' + fieldId).parent('.field-item').append('<span class="error-message ' + type +'">'+ errorMessage[type] +'</span>');
            }
            
        }
    });

    // Validate form fields function
    function validation(value, id){
        // hide any errors already showing
        $('#' + id).parent('.field-item').find('.error-message').hide();

        // get validation rules from data attribute
        var attr = $('#' + id).attr('data-validate');
        if (typeof attr !== 'undefined' && attr !== false) {
            var validation = $('#' + id).data('validate').split(',');

            // check data attribute for validation rules
            if(value === ''){
                // show required erorr
                $('#' + id).parent('.field-item').find('.error-message.required').fadeIn();
            }else{
                for (var i = 0; i < validation.length; i++){
                    var type = validation[i];
                    type = type.replace(' ', '');
                    if(!validate[type].test($('#' + id).val())){
                        $('#' + id).nextAll('.error-message.' + type).fadeIn();
                    }
                }
            }
            
        }
    }

    // on blur validate fields
    $('input, select, textarea').on('blur', function(){

        // field value
        var value = $(this).val();
        var fieldId = $(this).attr('id');

        // pass value and field id to validation function
        validation(value, fieldId);

    });
    
}(jQuery));