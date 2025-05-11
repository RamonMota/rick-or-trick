<template>
  <a class="button-logout" @click="handleClick">
    <img src="/public/img/logout.svg" alt="icone logout" />
  </a>
</template>

<script setup>
const emit = defineEmits(["click"]);

const handleClick = (event) => {
  emit("click", event);
};
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
