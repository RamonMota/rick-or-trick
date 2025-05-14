export const useQuizModal = () => {
  const showModal = useState("quizModal", () => false);

  function openModal() {
    showModal.value = true;
  }

  function closeModal() {
    showModal.value = false;
  }

  return { showModal, openModal, closeModal };
};
