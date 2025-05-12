export const useLogoutModal = () => {
    const showModal = useState('logoutModal', () => false)
  
    function openModal() {
      showModal.value = true
    }
  
    function closeModal() {
      showModal.value = false
    }
  
    return { showModal, openModal, closeModal }
  }