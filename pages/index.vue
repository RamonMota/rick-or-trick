<script setup>
</script>

<template>
  <div class="content-page">
    <div class="content-img-home">
      <img src="/public/img/rick-home.webp" alt="rick" />
    </div>
    <div class="content-float">
      <div class="d-flex flex-column gap-10">
        <div class="content-title">
          <h2>Tá achando que</h2>
          <div class="flex-title">
            <h2>conhece</h2>
            <img src="/public/img/logo.svg" alt="logo" />
            <h2>?</h2>
          </div>
        </div>
        <p class="sub-title">
          Digite seu nome aí, terráqueo… vamos ver quanto tempo você aguenta
          antes de errar feio.
        </p>
      </div>
      <MFormLogin/>
      <p class="terms">Todos os direitos reservados</p>
    </div>
  </div>
</template>

<style>
.content-page {
  height: 100svh;
  display: flex;
  flex-direction: column;
  background: var(--color-blue);
  justify-content: flex-end;
}
.content-title {
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    line-height: 40px;
  }

  .flex-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: -3px;
  }
}
.sub-title {
  font-size: 19px;
  opacity: 0.5;
}
.content-img-home {
  display: flex;
  align-items: flex-end;
  height: 100%;
  justify-content: center;

  img {
    height: 48vh;
    margin-bottom: -2px;
    margin-left: 20px;
  }
}
.content-float {
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;
  padding: 20px 20px 40px;
  max-width: 600px;
  margin: auto;
  gap: var(--space20);

  h2 {
    margin: 0;
  }
}
.flex-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
