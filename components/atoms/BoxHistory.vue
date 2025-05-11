<script setup>
const props = defineProps({
  variant: {
    type: String,
    validator: (value) => ["green", "red"].includes(value),
  },
  date: String,
  score: String,
});
</script>

<template>
  <div class="box-history-content" :class="[`box-history-${variant}`]">
    <div class="box-history-body">
      <div class="box-history-light">
        <p>{{ date }}</p>
        <p>{{ score }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-history-content {
  border: none;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  padding: 0 0 10px 0;
  border-radius: var(--space20);
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background: var(--color-gray);

  &.box-history-green {
    .box-history-body {
      .box-history-light {
        color: var(--color-green);
      }
    }
  }
  &.box-history-red {
    .box-history-body {
      .box-history-light {
        color: var(--color-red);
      }
    }
  }

  .box-history-body {
    min-height: 50px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-radius: var(--space20);
    padding: 5px;
    background-color: white;
    border: 2px solid var(--color-gray);

    .box-history-light {
      border-radius: calc(var(--space20) - 4px);
      padding: 0 var(--space20);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-position-y: -20px;
      background-repeat: no-repeat !important;
      background: linear-gradient(180deg, #42b3ca2d 0%, #fff 100%);

      p {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>
