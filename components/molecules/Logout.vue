<template>
  <MModalLogout :show="open" @close="open = false" @click="handleLogout()" />
  <ALogoutIcon @click="open = true" />
</template>

<script setup lang="ts">
const { logout } = useUserAuth();
const router = useRouter();
const open = ref(false);

const handleLogout = () => {
  logout();
  open.value = false
  router.push(Paths.HOME);
};
</script>
