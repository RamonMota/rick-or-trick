<script setup lang="ts">
import { useQuizController } from "~/composables/useQuizController";

const {
  quizzes,
  pending,
  isModalResultOpen,
  quizSessionId,
  answeredIndexes,
  handleQuizVariant,
  handleCheckAnswer,
  restartQuiz
} = useQuizController();
</script>

<template>
  <div v-if="pending" class="flex-content-quiz">
    <ASkelleton v-for="n in 3" :key="n" />
  </div>
  <div v-else class="flex-content-quiz">
    <MCardQuiz
      v-for="(quiz, index) in quizzes"
      :key="`${index}-${quizSessionId}`"
      :visible="!answeredIndexes.includes(index)"
      :sessionId="quizSessionId"
      :correctName="quiz.correctName"
      :optionsName="quiz.optionsName"
      :image="quiz.image"
      :delayAnimation="900"
      :variant="handleQuizVariant(index)"
      @answer="(answer) => handleCheckAnswer(answer, index)"
    />
  </div>
  <MModalQuiz :isOpen="isModalResultOpen" @click="restartQuiz" />
</template>

<style>
.fake-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  display: flex;
  z-index: 10;
  gap: 10px;
  margin: auto;
  justify-content: center;
  width: 100%;
}
.flex-content-quiz {
  position: relative;
  width: 100%;
  height: 100%;

  .content-box {
    position: absolute;
    inset: 0;
    height: fit-content;
    transform-origin: top center;
    transition: transform 0.3s ease;
  }
  .content-box:nth-child(1) {
    z-index: 5;
    box-shadow: 0 5px 5px rgba(22, 22, 22, 0.2509803922);
  }
  .content-box:nth-child(2) {
    background: #e0eef1;
    transform: translateY(-8px) scale(0.95);
    z-index: 4;
  }
  .content-box:nth-child(3) {
    z-index: 3;
    background: #bcdde5;
    transform: translateY(-16px) scale(0.9);
  }
  .content-box:nth-child(4) {
    transform: scale(0.9);
    z-index: 2;
  }
  .content-box:nth-child(5) {
    transform: scale(0.9);
    z-index: 1;
  }
}
</style>
