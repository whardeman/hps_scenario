<template>
  <div id="app" class="app">

    <!-- Add your site or application content here -->
    <div class="main">
      <h1>Fill out this form, or else.*</h1>
      <ValidationObserver ref="form">
        <form @submit.prevent="onSubmit">

          <div class="field-input-container">

            <TextInput name="First name" v-model="fname" field="fname" rules="required"></TextInput>
            <TextInput name="Last name" v-model="lname" field="lname" rules="required"></TextInput>
            <TextInput name="Email" v-model="email" field="email" rules="required|email"></TextInput>
            <TextInput name="ZIP code" v-model="zipcode" field="zipcode" maxlength="5" rules="required|zipcode:5" fieldClass="sm"></TextInput>
            <TextInput name="Total goats" type="number" v-model="goats" field="goats"maxlength="5"  mode="lazy" rules="required|goatsGreaterThanOrEqualTo:18" fieldClass="mi"></TextInput>
            <RadioGroup name="Rating" helpText="How would you rate this form so far?" :options="ratingOptions" v-model="rating" field="rating" mode="lazy" rules="required"></RadioGroup>
            <CheckboxInput name="I've finished this form:" v-model="completed" field="completed" rules="finishRequired"></CheckboxInput>

            <div class="cta-container">
              <button class="cta" type="submit">Sign me up!</button>
            </div>
          </div>

        </form>
      </ValidationObserver>
    </div>


    <div class="bottom">
      *Otherwise, you won't be able to tell if I've done it right.
    </div>

  </div>

</template>

<script>
  import { setInteractionMode, ValidationObserver } from 'vee-validate';
  import TextInput from "@/components/TextInput";
  import RadioGroup from "@/components/RadioGroup";
  import CheckboxInput from "@/components/CheckboxInput";

  const interactionMode = 'eager';
  setInteractionMode(interactionMode);

  export default {
    data() {
      return {
        fname:"",
        lname: "",
        email: "",
        zipcode: "",
        goats: "",
        rating: "1",
        ratingOptions: {
          "1": "Pretty good", 
          "2": "Very Good", 
          "3": "Excellent!", 
          "4": "I want more choices..."
        },
        completed: false,
        interactionMode: interactionMode,
      }
    },
    components: {
      ValidationObserver,
      TextInput,
      RadioGroup,
      CheckboxInput
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate().then(success => {
          if (!success) {
            return;
          }

          alert('Success!');
        });
      }
    }
  }
</script>