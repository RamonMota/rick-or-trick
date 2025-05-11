<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  },
  label: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit"].includes(value),
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  emit("click", event);
};
</script>

<template>
  <button
    class="btn-content"
    :class="[`btn-${variant}`]"
    @click="handleClick"
    :disabled="disabled"
    :type="type"
  >
    <div class="btn-body">
      <div class="btn-light">{{ label }}</div>
    </div>
  </button>
</template>

<style scoped lang="scss">
.btn-content {
  border: none;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  padding: 0 0 10px 0;
  border-radius: var(--space20);
  overflow: hidden;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  transition: ease-in-out 0.1s;

  &.btn-primary {
    background: var(--color-dark-blue);
    .btn-body {
      background: var(--color-blue);
      .btn-light {
        background: linear-gradient(
          180deg,
          #ffffff61 0%,
          var(--color-blue) 100%
        );
      }
    }
  }
  &.btn-secondary {
    background: var(--color-gray);
    .btn-body {
      background: white;
      border: 2px solid var(--color-gray);
      .btn-light {
        background: linear-gradient(180deg, #42b3ca2d 0%, #fff 100%);
      }
    }
  }

  &:not(:disabled):active {
    padding: 0 0 5px 0;
    transform: translateY(5px);
    margin-bottom: 5px;
    .btn-body {
      .btn-light {
        background-position-y: -35px;
      }
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-body {
    min-height: 50px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-radius: var(--space20);
    padding: 5px;

    .btn-light {
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
    }
  }
}
</style>
