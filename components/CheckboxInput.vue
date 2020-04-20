<template>
  <ValidationProvider tag="div" :rules="rules" :name="name" :vid="vid" v-slot="{ errors }" class="field-input" :mode="interactionMode">
    <div class="input-container">
      <label class="checkbox-label" :for="field"> 
        <input type="checkbox" :ref="field" :id="field" class="checkbox-input" :class="fieldClass" :maxlength="maxlength" value="false" v-model="checkBoxValue"/> 
        <span class="label-text">{{name}} </span> 
      </label>
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
    name: "CheckboxInput",
    components: {
      ValidationProvider
    },
    props: {
      value: null,
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
      checked: false,
    }),
    computed: {
      interactionMode(){
        return this.$props.mode !== "" ? this.$props.mode : this.$parent.$parent.interactionMode;
      },
      checkBoxValue: {
        get: function() {
          return this.value
        },
        set: function() {
          // Communicate the change to parent component so that selectedValue can be updated
          this.$emit("input", this.$refs[this.field].checked)
        }
      }
    },
  }
</script>