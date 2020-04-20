<template>
  <ValidationProvider tag="div" :rules="rules" :name="name" :vid="vid" v-slot="{ errors }" class="field-input">
    <label :for="field" class="above-label">
      <div class="help-text" v-if="helpText">
        {{helpText}}
      </div>
    </label>
    <div class="input-container">
      <div class="radio-group" v-for="o,k of options">
        <label class="radio-label" :for="field+'-'+k">
          <input :type="type" :id="field+'-'+k" class="radio-input" :value="k" v-model="currentValue" />
          <span class="label-text">{{o}}</span>
        </label>
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
  import { ValidationProvider } from "vee-validate";
  export default {
    name: "RadioGroup",
    components: {
      ValidationProvider
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
      },
      initialValue: {
        default: 1
      }
    },
    data: () => ({
      currentValue: ''
    }),
    computed: {
      currentValue (val) {
        // allows us to use v-model on our input.
        this.$emit('input', val);
      }
    }
  }
</script>