<script setup>
const router = useRouter();
const { login, isLoggedIn } = useUserAuth();

onMounted(() => {
  if (isLoggedIn()) {
    router.push(Paths.QUIZ);
  }
});

const name = ref("");
const error = ref("");

const handleLogin = () => {
  if (login(name.value)) {
    router.push(Paths.QUIZ);
  } else {
    error.value = "Por favor, digite seu nome";
    setTimeout(() => {
      error.value = "";
    }, 4000);
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin" class="d-flex flex-column gap-20">
    <AInput v-model="name" :error="error" placeholder="Digite seu nome" />
    <AButton type="submit" label="Entrar" variant="primary" />
  </form>
</template>
