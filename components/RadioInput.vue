<template>
  <label class="radio-label" :for="field+'-'+value">
    <input type="radio" :id="field+'-'+value" class="radio-input" :checked="shouldBeChecked" :value="value" @change="updateInput" /> 
    <span class="label-text">{{label}}</span>
  </label>
</template>

<script>
export default {
  name: "RadioInput",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
    },
    modelValue: {
      default: ""
    },
    label: {
      type: String,
      required: true
    },
    field: {
      type: String,
      default: ''
    }
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue == this.value
    }
  },
  methods: {
    updateInput() {
      this.$emit('change', this.value)
    }
  }
}
</script>