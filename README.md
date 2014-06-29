jQuery Form Validation
===============

jQuery Validate is a form validation plugin that makes it easy to add validation to existing forms. Error messages are fully customizable and translated in various languages. This plugin also dyncamically adds [WAI-ARIA](http://www.w3.org/WAI/intro/aria) roles to help make your form more accessibile.

### Supported Languages
English, German, Spanish

[DEMO](http://htmlpreview.github.io/?https://github.com/ryanburgess/jquery-validate/master/index.html)

![jQuery Validate form example](https://raw.github.com/ryanburgess/jquery-validate/master/screenshot.png)

## Install
Using bower

    bower install jQueryValidate

## Integration
Add JavaScript reference for jquery-validate.js in your HTML.
    
    <script src="js/jquery-validate.min.js" type="text/javascript"></script>

Then use the submitForm funciton for whatever you'd like to happen after the form validates.
    
    <script type="text/javascript">
        window.submitForm = function(){
            // after form validation is good then
        }
    </script>


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
