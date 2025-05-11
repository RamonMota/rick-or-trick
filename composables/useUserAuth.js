export const useUserAuth = () => {
    const nuxtApp = useNuxtApp()
    const router = useRouter()
    
    // Estado reativo para armazenar o nome do usuário
    const userName = ref(null)
    
    // Inicializa o estado com o valor do localStorage (apenas no cliente)
    onMounted(() => {
      userName.value = nuxtApp.$auth.getUserName()
    })
    
    // Função para login
    const login = (name) => {
      try {
        userName.value = nuxtApp.$auth.login(name)
        return true
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        return false
      }
    }
    
    // Função para logout
    const logout = () => {
      nuxtApp.$auth.logout()
      userName.value = null
    }
    
    // Middleware para proteger rotas
    const requireAuth = async (to, from) => {
      if (process.client && !nuxtApp.$auth.isLoggedIn()) {
        return router.push(Paths.HOME)
      }
    }
    
    return {
      userName,
      login,
      logout,
      isLoggedIn: () => nuxtApp.$auth.isLoggedIn(),
      requireAuth
    }
  }