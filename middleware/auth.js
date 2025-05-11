export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useUserAuth()
    const router = useRouter();
    
    // Verifica se o usuário está logado no lado do cliente
    if (process.client && !isLoggedIn()) {
      router.push(Paths.HOME)
    }
  })