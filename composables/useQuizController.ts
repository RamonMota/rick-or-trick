import { ref, watchEffect, computed } from "vue";
import { AnswerVariant, type IQuizList } from "~/types/quizList";
import { useQuizState } from "~/composables/useQuizState";

export function useQuizController() {
  const {
    data: quizzes,
    execute: fetchQuizzes,
    pending,
  } = useFetch<IQuizList[]>("/api/quiz", {
    immediate: true,
  });

  const { currentStep, totalQuestions, correctAnswers, wrongAnswers, resetQuiz } =
    useQuizState();
  
  const isModalResultOpen = ref(false);
  const quizSessionId = ref(0);
  const answeredIndexes = ref<number[]>([]);
  const selectedAnswers = ref<Record<number, string>>({});

  watchEffect(() => {
    if (quizzes.value) {
      totalQuestions.value = quizzes.value.length;
    }
  });

  const handleCheckAnswer = (selectedAnswer: string, quizIndex: number) => {
    if (answeredIndexes.value.includes(quizIndex)) return;

    const quiz = quizzes.value?.[quizIndex];
    if (!quiz) return;

    if (selectedAnswer === quiz.correctName) {
      correctAnswers.value++;
    } else {
      wrongAnswers.value++;
    }

    currentStep.value++;
    selectedAnswers.value[quizIndex] = selectedAnswer;
    answeredIndexes.value.push(quizIndex);

    if (currentStep.value >= totalQuestions.value) {
      setTimeout(() => {
        isModalResultOpen.value = true;
      }, 900);
    }
  };

  const handleQuizVariant = (index: number) => {
    if (!answeredIndexes.value.includes(index)) return '';
    
    const quiz = quizzes.value?.[index];
    if (!quiz) return '';
    
    return quiz.correctName === selectedAnswers.value[index]
      ? AnswerVariant.CORRECT
      : AnswerVariant.WRONG;
  };

  const restartQuiz = async () => {
    isModalResultOpen.value = false;
    resetQuiz();
    answeredIndexes.value = [];
    selectedAnswers.value = {};

    await fetchQuizzes();
    quizSessionId.value++;
  };

  return {
    quizzes,
    pending,
    isModalResultOpen,
    quizSessionId,
    answeredIndexes,
    selectedAnswers,
    currentStep,
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    handleCheckAnswer,
    handleQuizVariant,
    restartQuiz
  };
}