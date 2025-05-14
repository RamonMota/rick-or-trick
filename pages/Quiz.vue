<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="p-20 full-height d-flex flex-column gap-20">
    <MTimelineHeader />
    <div class="w-100 h-100">
      <OSlideQuiz />
    </div>
    <p class="terms">Todos os direitos reservados</p>
  </div>
</template>
