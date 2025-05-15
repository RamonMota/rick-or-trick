import { defineNuxtRouteMiddleware } from "#app";
import { useUserAuth } from "~/composables/useUserAuth";

export default defineNuxtRouteMiddleware((_to, _from) => {
  const router = useRouter();
  const { isLoggedIn } = useUserAuth();

  if (process.client && !isLoggedIn()) {
    return router.push(Paths.HOME);
  }
});
