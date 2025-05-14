<template>
  <a class="button-logout" @click="openModal()">
    <img src="/public/img/logout.svg" alt="icone logout" />
  </a>
</template>

<script setup>
const { openModal } = useLogoutModal();
</script>

<style>
.button-logout {
  cursor: pointer;
  border: none !important;
  box-shadow: none !important;
  background: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
