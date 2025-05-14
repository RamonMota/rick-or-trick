<script setup>
const props = defineProps({
  level: String,
  modelValue: Number,
  value: Number,
  name: String,
});

const emit = defineEmits(["update:modelValue"]);

const onChange = () => {
  emit("update:modelValue", props.value);
};
</script>

<template>
  <label class="select-content" :class="[modelValue === value && `selected`]">
    <input
      class="d-none"
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :name="name"
      @change="onChange"
    />
    <div class="select-body">
      <div class="select-light">
        <p>{{ value }}</p>
        <p>{{ level }}</p>
      </div>
    </div>
  </label>
</template>

<style scoped lang="scss">
.select-content {
  cursor: pointer;
  border: none;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  padding: 0 0 10px 0;
  border-radius: var(--space20);
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  transition: ease-in-out 0.1s;
  background: var(--color-gray);
  -webkit-tap-highlight-color: transparent; 

  &.selected {
    background: var(--color-dark-green) !important;
    padding: 0 0 5px 0;
    transform: translateY(5px);
    margin-bottom: 5px;
    .select-body {
      background-color: var(--color-green) !important;
      border: 2px solid var(--color-green) !important;
      .select-light {
        background: linear-gradient(
          180deg,
          #ffffff61 0%,
          var(--color-green) 100%
        ) !important;
        background-position-y: -35px;
      }
    }
  }

  .select-body {
    background: white;
    border: 2px solid var(--color-gray);
    min-height: 50px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-radius: var(--space20);
    padding: 5px;

    .select-light {
      background: linear-gradient(180deg, #42b3ca2d 0%, #fff 100%);
      border-radius: calc(var(--space20) - 4px);
      padding: 0 var(--space20);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position-y: -20px;
      background-repeat: no-repeat !important;
      transition: background-position 0.1s ease-in-out;
      color: var(--color-black);
      display: flex;
      flex-direction: column;

      p:nth-child(1) {
        white-space: nowrap;
        font-size: 20px;
        font-weight: 600;
      }
      p:nth-child(2) {
        margin-top: -7px;
        white-space: nowrap;
        font-size: 18px;
        opacity: 0.5;
        font-weight: 400;
      }
    }
  }
}
</style>
