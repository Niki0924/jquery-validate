(function($) {
    'use strict';
    // Regex validation rules
    var validate = {
        required: /./,
        name: /^[A-Za-z ,'-]{1,25}$/,
        email: /^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,})$/
    }

    // Error messages after validation rules
    var errorMessage = {
        required: 'This field is required',
        name: 'A valid name is required',
        email: 'A valid email address is required'
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
                $('#' + fieldId).parent().append('<span class="error-message ' + type +'">'+ errorMessage[type] +'</span>');
            }
            
        }
    });

    // on blur validate fields
    $('input, select, textarea').on('blur', function(){

        // field value
        var value = $(this).val();
        var fieldId = $(this).attr('id');

        // hide any errors already showing
        $(this).parent().find('.error-message').hide();

        // get validation rules from data attribute
        var attr = $(this).attr('data-validate');
        if (typeof attr !== 'undefined' && attr !== false) {
            var validation = $(this).data('validate').split(',');

            // check data attribute for validation rules
            if(value === ''){
                // show required erorr
                $(this).parent().find('.error-message.required').fadeIn();
            }else{
                for (var i = 0; i < validation.length; i++){
                    var type = validation[i];
                    type = type.replace(' ', '');
                    if(!validate[type].test($(this).val())){
                        $(this).nextAll('.error-message.'+type).fadeIn();
                    }
                }
            }
            
        }

    });
    
}(jQuery));