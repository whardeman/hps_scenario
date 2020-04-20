import { extend } from "vee-validate";
import { required, min, min_value, numeric, email } from "vee-validate/dist/rules";

extend('email', {
  ...email,
  message: "Must be a valid email."
});

extend("required", {
  ...required,
  message: "This is required."
});

extend("goatsGreaterThanOrEqualTo", {
  ...min_value,
  message: "Minimum goats required: 18"
});

extend("zipcode", {
  ...min,
  message: "Must be a 5-digit ZIP code."
})

extend("finishRequired", {
  validate: (value) => {
    if (value === true){
      return true;
    }
    return false;
  },
  message: "You have to finish!"
})
