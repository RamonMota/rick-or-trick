<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="p-20 full-height d-flex flex-column gap-20">
    <div class="content-box content-history">
      <div class="d-flex w-100 justify-between gap-10 max-content mx-auto">
        <h3 class="title-content">Seu Histórico</h3>
        <MLogout />
      </div>
      <ABoxHistory date="15/02/2025" score="3/5" variant="green" />
      <ABoxHistory date="22/01/2025" score="2/5" variant="red" />
      <div class="d-flex flex-column gap-10 mt-auto">
        <p class="text-error">
          Uau, olha só quem já brincou demais por hoje. Vai dar uma volta no
          espaço e tenta de novo amanhã, campeão.
        </p>
        <AButton label="Iniciar" disabled />
        <p class="terms">Todos os direitos reservados</p>
      </div>
    </div>
  </div>
</template>

<style>
.content-history {
  .title-content {
    font-size: 26px;
    margin: 0;
  }
}
</style>
