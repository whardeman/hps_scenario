<template>
  <ValidationProvider tag="div" :rules="rules" :name="name" :vid="vid" v-slot="{ errors }" class="field-input">
    <label :for="field" class="above-label">
      <div class="help-text" v-if="helpText">
        {{helpText}}
      </div>
    </label>
    <div class="input-container">
      <div class="radio-group" v-for="o,k of options">
        <RadioInput :name="field" :label="k" :label-text="o" :value="selectedValue" @change="changeValue" v-model="selectedValue"></RadioInput>
      </div>
      <div v-if="errors[0]" class="error-container">
        <div class="error">
          <div class="error-message">
            {{ errors[0] }}
          </div>
        </div>
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
  import RadioInput from "@/components/RadioInput";
  import { ValidationProvider } from "vee-validate";
  export default {
    name: "RadioGroup",
    components: {
      ValidationProvider,
      RadioInput
    },
    props: {
      value: {
        default: ''
      },
      rules: {
        type: [String, Object],
        default: ''
      },
      field: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      vid: {
        type: String,
        default: undefined
      },
      type: {
        type: String,
        default: 'radio'
      },
      helpText: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: {}
      }
    },
    data: function() {
        return {
          selectedValue: "1"
        };
    },
    watch: {
      selectedValue (val) {
        // allows us to use v-model on our input.
        this.$emit('input', val);
      }
    },
    methods: {
        changeValue: function(newValue) {
            this.selectedValue = newValue;
        }
    }
  }
</script>