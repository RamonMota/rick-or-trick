<script setup lang="ts">
import { AnswerVariant } from "~/types/quizList";

const props = defineProps({
  variant: {
    type: String as PropType<AnswerVariant | "">,
    default: "",
    validator: (value: string) =>
      [AnswerVariant.CORRECT, AnswerVariant.WRONG, ""].includes(value),
  },
  label: String,
});

const emit = defineEmits(["click"]);
</script>

<template>
  <div
    class="checkbox-content"
    :class="[`checkbox-${variant}`]"
    @click="emit('click')"
  >
    <div class="checkbox-body">
      <div class="checkbox-light">
        <div class="box-input">
          <img
            v-if="props.variant === AnswerVariant.CORRECT"
            src="/public/img/check.svg"
            alt="icone acertou"
          />
          <img
            v-else-if="props.variant === AnswerVariant.WRONG"
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
  min-height: 50px;
  padding: 0 0 10px 0;
  border-radius: var(--space20);
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  transition: background-position 0.1s ease-in-out, all 0.1s ease;
  background: var(--color-gray);
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;

  @media (max-width: 400px) and (max-height: 700px) {
    font-size: 16px;
    line-height: 18px;
    font-weight: 600;

    .checkbox-body {
      min-height: 45px !important;
    }
  }

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
    height: fit-content;
    background-color: white;
    border: 2px solid var(--color-gray);
    transition: background-color 0.1s ease-in-out;

    .checkbox-light {
      display: flex;
      align-items: center;
      gap: calc(var(--space20) - 10px);
      border-radius: calc(var(--space20) - 4px);
      padding: 0 10px;
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
        min-width: 24px;
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
