<template>
  <div>
    <MModalLogout />
    <Transition name="slide-fade" mode="out-in">
      <div>
        <NuxtPage />
      </div>
    </Transition>
  </div>
</template>
