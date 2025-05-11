<template>
  <div class="content-relative">
    <Transition name="slide-fade">
      <div v-if="show" class="modal-content">
        <div class="modal-body">
          <img class="img-modal" src="/public/img/morty.svg" alt="" />
          <h2>Desistir no meio? Que emocionante… quase senti algo.</h2>
        </div>
        <div class="d-flex flex-column gap-10">
          <AButton @click="emit('close')" label="Continuar" variant="primary" />
          <AButton @click="emit('click')" label="Sair" variant="secondary" />
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="show" class="modal-overlay" @click.self="emit('close')" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  show: Boolean,
});

const emit = defineEmits<{
  (e: "close"): void;
  (e: "click"): void;
}>();
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.content-relative {
  position: relative;
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
  inset: 0;
  height: fit-content;
  z-index: 3;
  margin: auto;
  box-shadow: 0 5px 5px #1d606e24;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 30px;
    line-height: 38px;
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
