<template>
  <ValidationProvider tag="div" :rules="rules" :name="name" :vid="vid" v-slot="{ errors }" class="field-input" :mode="interactionMode">
    <label :for="field" class="above-label">{{name}}</label>
    <div class="input-container">
      <input :type="type" :id="field" class="basic-input" :class="fieldClass" :maxlength="maxlength" v-model="currentValue"/>
      <div v-if="errors[0]" class="error-container popout">
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
    name: "TextInput",
    components: {
      ValidationProvider
    },
    props: {
      value: {
        type: String,
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
        default: 'text'
      },
      maxlength: {
        type: String,
        default: ''
      },
      fieldClass: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      currentValue: '',
    }),
    computed: {
      interactionMode(){
        return this.$props.mode !== "" ? this.$props.mode : this.$parent.$parent.interactionMode;
      }
    },
    watch: {
      currentValue (val) {
        // allows us to use v-model on our input.
        this.$emit('input', val);
      }
    }
  }
</script>