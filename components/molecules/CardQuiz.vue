<script setup lang="ts">
import { AnswerVariant } from "~/types/quizList";

const props = defineProps({
  variant: {
    type: String as PropType<AnswerVariant | "">,
    default: "",
    validator: (value: string) =>
      [AnswerVariant.CORRECT, AnswerVariant.WRONG, ""].includes(value),
  },
  visible: Boolean,
  sessionId: Number,
  image: String,
  delayAnimation: Number,
  correctName: String,
  optionsName: Array as PropType<string[]>,
});

const emit = defineEmits<(event: "answer", value: string) => void>();

const selectedOption = ref<string | null>(null);
const isVisible = ref(props.visible);

watchEffect(() => {
  if (props.visible) {
    isVisible.value = true;
    selectedOption.value = null;
  } else {
    setTimeout(() => {
      isVisible.value = false;
    }, props.delayAnimation);
  }
});

watch(
  () => props.sessionId,
  () => {
    isVisible.value = props.visible;
    selectedOption.value = null;
  }
);

const handleCheckAnswer = (option: string) => {
  if (selectedOption.value) return;
  selectedOption.value = option;
  emit("answer", option);
};

const getVariant = (option: string): AnswerVariant | "" => {
  if (selectedOption.value !== option) return "";
  return option === props.correctName ? AnswerVariant.CORRECT : AnswerVariant.WRONG;
};
</script>

<template>
  <div
    v-if="isVisible"
    class="content-box content-quiz"
    :class="[`${variant}-answer-animation`]"
  >
    <div class="img-quiz">
      <img :src="image" alt="Personagem do quiz" />
    </div>
    <p class="title-quiz">Adivinhe quem é!?</p>
    <div class="grid-quiz">
      <div class="fix-marge" v-for="option in optionsName" :key="option">
        <ACheckButton
          :label="option"
          @click="handleCheckAnswer(option)"
          :variant="getVariant(option)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-quiz {
  @media (min-width: 750px) {
    height: fit-content;
  }

  @media (max-width: 400px) and (max-height: 700px) {
    gap: calc(var(--space20) - 10px);
  }
  .title-quiz {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
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
    margin: var(--space20);
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
      margin: calc(var(--space20) - 5px);
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
    .fix-marge {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>
