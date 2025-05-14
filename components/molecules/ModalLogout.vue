<script setup lang="ts">
const { showModal, closeModal } = useLogoutModal();
const { logout } = useUserAuth();
const router = useRouter();

const handleLogout = () => {
  logout();
  closeModal();
  router.push(Paths.HOME);
};
</script>

<template>
  <div class="content-relative">
    <Transition name="slide-fade">
      <div v-if="showModal" class="modal-content">
        <div class="modal-body">
          <img class="img-modal" src="/public/img/morty.svg" alt="" />
          <h2>Desistir no meio? Que emocionante… quase senti algo.</h2>
        </div>
        <div class="d-flex flex-column gap-10">
          <AButton @click="closeModal()" label="Continuar" variant="primary" />
          <AButton @click="handleLogout()" label="Sair" variant="secondary" />
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div
        v-if="showModal"
        class="modal-overlay"
        @click.self="closeModal()"
      ></div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

.content-relative {
  position: relative;
  z-index: 12;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: #42b3ca74;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-content {
  background: white;
  border-radius: var(--space20);
  padding: var(--space20);
  max-width: 390px;
  position: fixed;
  inset: var(--space20);
  height: fit-content;
  z-index: 3;
  margin: auto;
  box-shadow: 0 5px 5px #1d606e24;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 28px;
    line-height: 36px;
  }

  .img-modal {
    margin-top: -110px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 170px;
  }
}
</style>
