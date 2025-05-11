<template>
  <div class="d-flex flex-column gap-5 ">
    <input
      class="input-default"
      :class="{ 'input-error': error }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      type="text"
    />
  
    <p v-if="error" class="input-error-message">{{ error }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  error: String,
  placeholder: String,
  disabled: Boolean,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const internalError = ref("");
let errorTimer = null;

watch(
  () => props.error,
  (newError) => {
    if (newError) {
      internalError.value = newError;

      if (errorTimer) clearTimeout(errorTimer);

      errorTimer = setTimeout(() => {
        console.log("TESTE");
        internalError.value = "";
      }, 4000);
    }
  }
);

onBeforeUnmount(() => {
  if (errorTimer) clearTimeout(errorTimer);
});
</script>

<style>
.input-default {
  border-radius: var(--space20);
  border: 2px solid var(--color-gray);
  padding: 0 var(--space20);
  height: 60px;
  font-size: var(--font20);
  color: var(--color-black);
  outline: none !important;
  box-shadow: inset 0 5.5px 6px 0px #e4e4e4b2 !important;
  width: 100%;

  &.input-error {
    border-color: var(--color-red);
  }

  &::placeholder {
    opacity: 0.3;
  }
}
.input-error-message {
  color: var(--color-red);
  font-size: 16px;
}
</style>
