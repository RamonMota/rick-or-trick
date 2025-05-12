export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useUserAuth()
    const router = useRouter();
    
    if (process.client && !isLoggedIn()) {
      router.push(Paths.HOME)
    }
  })