<template>
  <div class="content-box content-skelleton">
    <div class="img-quiz loading-Skeleton"></div>
    <p class="title-quiz">Adivinhe quem é!?</p>
    <div class="grid-quiz">
      <div
        v-for="n in 4"
        :key="n"
        class="fake-content-checkbox loading-Skeleton"
      ></div>
    </div>
  </div>
</template>

<style>
.content-skelleton {
  animation: fadeIn 0.5s ease-in-out forwards;
  .fake-content-checkbox {
    background: #76d5e874;
    border-radius: var(--space20);
    height: 60px;
    width: 100%;
  }
  .title-quiz {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    width: 100%;

    @media (min-width: 750px) {
      font-size: 22px;
    }
    @media (max-width: 400px) and (max-height: 700px) {
      font-size: 3vh;
      line-height: 4vh;
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
  .img-quiz {
    margin: var(--space20);
    border-radius: var(--space20);
    flex: 1 1 auto;
    object-fit: contain;
    height: 100vh;
    max-height: 300px;
    width: 100%;
    max-width: 300px;
    background: #76d5e874;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
    }

    @media (max-width: 400px) and (max-height: 850px) {
      height: 22vh;
      width: 22vh;
      margin: calc(var(--space20) - 5px);
    }
  }
}
</style>
