<template>
  <div
    class="content-box content-quiz"
    :class="[`${variant}-answer-animation`]"
  >
    <div class="img-quiz">
      <img :src="props.image" alt="Personagem do quiz" />
    </div>
    <p class="title-quiz">Qual o nome desse personagem?</p>
    <div class="grid-quiz">
      <ACheckButton
        v-for="option in props.optionsName"
        :key="option"
        :label="option"
        @click="handleCheckAnswer(option)"
        :variant="props.variant"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnswerVariant } from "~/types/quizList";

const props = defineProps({
  variant: {
    type: String as PropType<AnswerVariant | "">,
    default: "",
    validator: (value: string) =>
      [AnswerVariant.CORRECT, AnswerVariant.WRONG, ""].includes(value),
  },
  image: String,
  optionsName: Array as PropType<string[]>,
});

const handleCheckAnswer = (optionsName: string) => {
  console.log(optionsName);
};
</script>

<style scoped>
.content-quiz {
  @media (min-width: 750px) {
    height: fit-content;
  }

  @media (max-width: 400px) and (max-height: 700px) {
    gap: calc(var(--space20) - 10px);
    .checkbox-content {
      font-size: 17px;

      .checkbox-body {
        min-height: 45px !important;
      }
    }
  }
  .title-quiz {
    font-size: 30px;
    font-weight: 600;
    line-height: 35px;
    text-align: start;
    width: 100%;

    @media (min-width: 750px) {
      font-size: 22px;
    }
    @media (max-width: 400px) and (max-height: 700px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  }

  .img-quiz {
    margin-top: var(--space20);
    border-radius: var(--space20);
    flex: 1 1 auto;
    object-fit: contain;
    height: 100vh;
    max-height: 300px;
    width: 100%;
    max-width: 300px;
    background: #42b3ca74;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
    }

    @media (max-width: 400px) and (max-height: 850px) {
      height: 22vh;
      width: 22vh;
      margin-top: calc(var(--space20) - 5px);
    }
  }

  .grid-quiz {
    display: flex;
    flex-direction: column;
    gap: calc(var(--space20) - 10px);
    width: 100%;

    @media (min-width: 750px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .checkbox-content {
        font-size: 16px;
      }
    }
  }
}
</style>
