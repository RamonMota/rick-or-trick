<script setup>
import { ref } from "vue";

const variant = ref(null);

definePageMeta({
  middleware: "auth",
});

const handleClickCheck = () => {
  const variants = ["correct", "wrong", null];
  const availableVariants = variants.filter((v) => v !== variant.value);
  const randomIndex = Math.floor(Math.random() * availableVariants.length);
  variant.value = availableVariants[randomIndex];
};
</script>

<template>
  <div class="p-20 full-height d-flex flex-column gap-20">
    <div class="d-flex w-100 gap-10 max-content mx-auto">
      <ATimeline />
      <ALogout />
    </div>
    <div class="content-box content-quiz">
      <img
        class="img-quiz"
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="image quiz"
      />
      <p class="title-quiz">Qual o nome desse personagem?</p>
      <div class="grid-quiz">
        <ACheckButton
          v-for="(_, index) in 4"
          :key="'button-' + index"
          label="Young Jerry Smith"
          @click="handleClickCheck"
          :variant="variant"
        />
      </div>
      <p class="terms">Todos os direitos reservados</p>
    </div>
  </div>
</template>

<style scoped>
.content-quiz {
  @media (min-width: 750px) {
    height: fit-content;
  }

  @media (max-width: 400px) and (max-height: 700px) {
    gap: calc(var(--space20) - 10px);
    .checkbox-content {
      font-size: 17px;

      .checkbox-body {
        min-height: 45px !important;
      }
    }
  }
  .title-quiz {
    font-size: 30px;
    font-weight: 600;
    line-height: 35px;
    text-align: start;
    width: 100%;

    @media (min-width: 750px) {
      font-size: 22px;
    }
    @media (max-width: 400px) and (max-height: 700px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  }

  .img-quiz {
    margin-top: var(--space20);
    border-radius: var(--space20);
    flex: 1 1 auto;
    object-fit: contain;
    max-height: 300px;

    @media (max-width: 400px) and (max-height: 850px) {
      height: 22vh;
      margin-top: calc(var(--space20) - 5px);
    }
  }

  .grid-quiz {
    display: flex;
    flex-direction: column;
    gap: calc(var(--space20) - 10px);
    width: 100%;

    @media (min-width: 750px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      .checkbox-content {
        font-size: 16px;
      }
    }
  }
}
</style>
