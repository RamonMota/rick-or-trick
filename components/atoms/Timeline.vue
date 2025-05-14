<script setup lang="ts">
import { AnswerVariant } from "~/types/quizList";
const { correctAnswers, wrongAnswers, currentStep, totalQuestions } =
  useQuizState();
const progressClass = ref("");
const lastCorrect = ref(correctAnswers.value);
const lastWrong = ref(wrongAnswers.value);

const progressPercentage = computed(() => {
  if (totalQuestions.value === 0) return 0;
  return Math.min((currentStep.value / totalQuestions.value) * 100, 100);
});

const triggerHighlight = (type: AnswerVariant) => {
  progressClass.value = `highlight-${type}`;
  document.body.classList.add(`highlight-${type}`);
  setTimeout(() => {
    progressClass.value = "";
    document.body.className = "";
  }, 300);
};

watch([correctAnswers, wrongAnswers], () => {
  if (correctAnswers.value > lastCorrect.value) {
    triggerHighlight(AnswerVariant.CORRECT);
    lastCorrect.value = correctAnswers.value;
  } else if (correctAnswers.value === 0) {
    lastCorrect.value = 0;
  }

  if (wrongAnswers.value > lastWrong.value) {
    triggerHighlight(AnswerVariant.WRONG);
    lastWrong.value = wrongAnswers.value;
  } else if (wrongAnswers.value === 0) {
    lastWrong.value = 0;
  }
});
</script>

<template>
  <div class="content-timeline">
    <p class="no-wrap">{{ currentStep }}/{{ totalQuestions }}</p>
    <div class="content-progress">
      <div
        class="progress"
        :class="progressClass"
        :style="{ width: `${progressPercentage}%` }"
      ></div>
    </div>
  </div>
</template>

<style>
.content-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  p {
    font-size: 20px;
    font-weight: 600;
  }

  .content-progress {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: var(--color-black);
    padding: 4px;
    border-radius: 100px;
    width: 100%;
    height: 15px;

    .progress {
      transition: all 0.3s ease-in-out;
      height: 7px;

      border-radius: 100px;
      background: var(--color-blue);
    }
  }
}
</style>
