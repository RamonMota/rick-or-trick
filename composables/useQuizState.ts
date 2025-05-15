
export const useQuizState = () => {
  const currentStep = useState<number>("quiz-step", () => 0);
  const totalQuestions = useState<number>("quiz-total", () => 0);
  const correctAnswers = useState<number>("quiz-corrects", () => 0);
  const wrongAnswers = useState<number>("quiz-worngs", () => 0);

  const resetQuiz = () => {
    currentStep.value = 0;
    totalQuestions.value = 0;
    correctAnswers.value = 0;
    wrongAnswers.value = 0;
  };

  return {
    currentStep,
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    resetQuiz,
  };
};
