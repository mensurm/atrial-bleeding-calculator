
   $.fn.form.settings.rules.greaterThan = function (inputValue, validationValue) {
    return inputValue > validationValue;
}

  $.fn.form.settings.rules.lowerOrEqualThan = function(inputValue, validationValue) {
      return inputValue <= validationValue;
  }

  var validationRulesFemale = {
    gender: {
        identifier: 'gender',
        rules: [
        {
            type: 'empty',
            prompt: 'Please select patient gender'
        }]
    },
    total_cholesterol: {
        identifier: 'total_cholesterol',
        rules: [
            {
                type: 'empty',
                prompt: 'Please enter total cholesterol value'
            },
            {
                type: 'greaterThan[0]',
                prompt: 'Total cholesterol value must be higher than 0'
            },
            {
                type: 'lowerOrEqualThan[6.8]',
                prompt: 'Total cholesterol value must be lower or equal to 6.8'

            }
        ]
    },
    triglyceride: {
        identifier: 'triglyceride',
        rules: [
            {
                type: 'empty',
                prompt: "Please enter triglyceride value"
            },
            {
                type: 'greaterThan[0]',
                prompt: 'Triglyceride value must be higher than 0'
            },
            {
                type: 'lowerOrEqualThan[2.8]',
                prompt: 'Triglyceride value must be lower or equal to 2.8'

            }
        ]
    },
    high_density_lipoproteins: {
        identifier: 'high_density_lipoproteins',
        rules: [
            {
                type: 'empty',
                prompt: "Please enter high desity lipoproteins value"
            },
            {
                type: 'greaterThan[0.77]',
                prompt: 'High density lipoproteins value must be higher than 0'
            },
            {
                type: 'lowerOrEqualThan[2.28]',
                prompt: 'High density lipoproteins value must be lower or equal to 2.28'

            }
        ]
    }
};

var validationRulesMale = {
    gender: {
        identifier: 'gender',
        rules: [
        {
            type: 'empty',
            prompt: 'Please select patient gender'
        }]
    },
    total_cholesterol: {
        identifier: 'total_cholesterol',
        rules: [
            {
                type: 'empty',
                prompt: 'Please enter total cholesterol value'
            },
            {
                type: 'greaterThan[0]',
                prompt: 'Total cholesterol value must be higher than 0'
            },
            {
                type: 'lowerOrEqualThan[6.8]',
                prompt: 'Total cholesterol value must be lower or equal to 6.8'

            }
        ]
    },
    triglyceride: {
        identifier: 'triglyceride',
        rules: [
            {
                type: 'empty',
                prompt: "Please enter triglyceride value"
            },
            {
                type: 'greaterThan[0]',
                prompt: 'Triglyceride value must be higher than 0'
            },
            {
                type: 'lowerOrEqualThan[2.8]',
                prompt: 'Triglyceride value must be lower or equal to 2.8'

            }
        ]
    },
    high_density_lipoproteins: {
        identifier: 'high_density_lipoproteins',
        rules: [
            {
                type: 'empty',
                prompt: "Please enter high desity lipoproteins value"
            },
            {
                type: 'greaterThan[0.77]',
                prompt: 'High density lipoproteins value must be higher than 0'
            },
            {
                type: 'lowerOrEqualThan[1.18]',
                prompt: 'High density lipoproteins value must be lower or equal to 1.18'

            }
        ]
    }
};

$( document ).ready(function() {
    $('.ui.form').form({
        fields: validationRulesMale
    });

   });



       const LIMITS = {
        "male": {
            "tc": {
                "placeholder": "[0 - 6.8] mmol/L",
                "lowerLimit": 0,
                "upperLimit": 6.8
            },
            "tg": {
                "placeholder": "[0 - 2.8] mmol/L",
                "lowerLimit": 0,
                "upperLimit": 2.8
            },
            "hdl": {
                "placeholder": "[0.77 - 1.18] mmol/L",
                "lowerLimit": 0.77,
                "upperLimit": 1.18
            }

        },
        "female": {
            "tc": {
                "placeholder": "[0 - 6.8] mmol/L",
                "lowerLimit": 0,
                "upperLimit": 6.8
            },
            "tg": {
                "placeholder": "[0 - 2.8] mmol/L",
                "lowerLimit": 0,
                "upperLimit": 2.8
            },
            "hdl": {
                "placeholder": "[0.77 - 2.28] mmol/L",
                "lowerLimit": 0.77,
                "upperLimit": 2.28
            }

        }
    }

    $('.ui.dropdown').dropdown({
        onChange: function(value) {
        if (value === "male") {
            $("#total_cholesterol").attr("placeholder", LIMITS.male.tc.placeholder).val("").focus().blur();
            $("#triglyceride").attr("placeholder", LIMITS.male.tg.placeholder).val("").focus().blur();
            $("#high_density_lipoproteins").attr("placeholder", LIMITS.male.hdl.placeholder).val("").focus().blur();
            $('.ui.form').form({fields: validationRulesMale});

        } else if (value === "female") {
            $("#total_cholesterol").attr("placeholder", LIMITS.female.tc.placeholder).val("").focus().blur();
            $("#triglyceride").attr("placeholder", LIMITS.female.tg.placeholder).val("").focus().blur();
            $("#high_density_lipoproteins").attr("placeholder", LIMITS.female.hdl.placeholder).val("").focus().blur();
            $('.ui.form').form({fields: validationRulesFemale});
        }

        }
    });

    $('.ui.dropdown').dropdown('set selected', 'male')


