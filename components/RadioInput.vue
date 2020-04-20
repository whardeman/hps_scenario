<template>
  <label class="radio-label">
    <input type="radio" class="radio-input" :value="label" :name="name" v-model="radioButtonValue">
    <span class="label-text">{{ labelText }}</span>
  </label>
</template>

<script>
export default {
  name: "RadioInput",
  props: ['name', 'label', 'value', 'labelText'],
  computed: {
    radioButtonValue: {
      get: function() {
        return this.value
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.label)
      }
    }
  }
}
</script>