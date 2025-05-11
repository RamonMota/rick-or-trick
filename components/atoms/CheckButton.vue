<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["correct", "wrong"].includes(value),
  },
  label: String,
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  emit("click", event);
};
</script>

<template>
  <div
    class="checkbox-content"
    :class="[`checkbox-${variant}`]"
    @click="handleClick"
  >
    <div class="checkbox-body">
      <div class="checkbox-light">
        <div class="box-input">
          <img
            v-if="variant === 'correct'"
            src="/public/img/check.svg"
            alt="icone acertou"
          />
          <img
            v-else-if="variant === 'wrong'"
            src="/public/img/close.svg"
            alt="icone errou"
          />
        </div>
        {{ label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkbox-content {
  border: none;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  padding: 0 0 10px 0;
  border-radius: var(--space20);
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  transition: background-position 0.1s ease-in-out, all 0.1s ease;
  background: var(--color-gray);

  &.checkbox-correct {
    background: var(--color-dark-green);
    .checkbox-body {
      background-color: var(--color-green);
      border: 2px solid var(--color-green);
      .checkbox-light {
        background: linear-gradient(
          180deg,
          #ffffff61 0%,
          var(--color-green) 100%
        );
      }
    }
  }
  &.checkbox-wrong {
    background: var(--color-dark-red);
    .checkbox-body {
      background-color: var(--color-red);
      border: 2px solid var(--color-red);
      .checkbox-light {
        background: linear-gradient(
          180deg,
          #ffffff61 0%,
          var(--color-red) 100%
        );
      }
    }
  }

  &:not(:disabled):active {
    padding: 0 0 5px 0;
    transform: translateY(5px);
    margin-bottom: 5px;
    transform-origin: bottom center;
    .checkbox-body {
      .checkbox-light {
        background-position-y: -35px;
      }
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox-body {
    min-height: 50px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-radius: var(--space20);
    padding: 5px;
    background-color: white;
    border: 2px solid var(--color-gray);
    transition: background-color 0.1s ease-in-out;

    .checkbox-light {
      display: flex;
      align-items: center;
      gap: calc(var(--space20) - 10px);
      border-radius: calc(var(--space20) - 4px);
      padding: 0 var(--space20);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-position-y: -20px;
      background-repeat: no-repeat !important;
      background: linear-gradient(180deg, #42b3ca2d 0%, #fff 100%);
      transition: background-position 0.1s ease-in-out;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .box-input {
        width: 24px;
        height: 24px;
        border-radius: 6px;
        border: 2px solid var(--color-black);
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 13px;
        }
      }
    }
  }
}
</style>
