export const useUserAuth = () => {
  const nuxtApp = useNuxtApp();
  const router = useRouter();

  const userName = ref(null);

  onMounted(() => {
    userName.value = nuxtApp.$auth.getUserName();
  });

  const login = (name) => {
    try {
      userName.value = nuxtApp.$auth.login(name);
      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const logout = () => {
    nuxtApp.$auth.logout();
    userName.value = null;
  };

  const requireAuth = async (to, from) => {
    if (process.client && !nuxtApp.$auth.isLoggedIn()) {
      return router.push(Paths.HOME);
    }
  };

  return {
    userName,
    login,
    logout,
    isLoggedIn: () => nuxtApp.$auth.isLoggedIn(),
    requireAuth,
  };
};
