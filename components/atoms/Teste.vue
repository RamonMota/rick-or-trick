<!-- // Criando uma solução simples de login baseada apenas no nome do usuário -->

<!-- // 1. Primeiro, vamos criar um plugin para gerenciar o armazenamento do nome (plugins/auth.js) -->
export default defineNuxtPlugin(() => {
  return {
    provide: {
      auth: {
        // Salva o nome do usuário no localStorage
        login(name) {
          if (!name || name.trim() === '') {
            throw new Error('Nome não pode estar vazio')
          }
          
          localStorage.setItem('userName', name)
          return name
        },
        
        // Verifica se o usuário está logado
        isLoggedIn() {
          if (process.client) {
            return !!localStorage.getItem('userName')
          }
          return false
        },
        
        // Obtém o nome do usuário
        getUserName() {
          if (process.client) {
            return localStorage.getItem('userName')
          }
          return null
        },
        
        // Faz logout (remove o nome)
        logout() {
          localStorage.removeItem('userName')
        }
      }
    }
  }
})

// 2. Agora, vamos criar um composable para fácil acesso (composables/useUserAuth.js)
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
      return navigateTo('/login')
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

// 3. Vamos criar uma página de login (pages/login.vue)
<template>
  <div class="login-container">
    <h1>Bem-vindo!</h1>
    <p>Digite seu nome para continuar</p>
    
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="name">Seu nome:</label>
        <input 
          v-model="name" 
          id="name" 
          type="text" 
          placeholder="Ex: Maria Silva"
          required
          autofocus
        />
      </div>
      
      <p v-if="error" class="error-message">{{ error }}</p>
      
      <button type="submit" class="login-button">
        Entrar
      </button>
    </form>
  </div>
</template>

<script setup>
const { login, isLoggedIn } = useUserAuth()
const router = useRouter()

// Se já estiver logado, redireciona para a página inicial
onMounted(() => {
  if (isLoggedIn()) {
    router.push('/')
  }
})

const name = ref('')
const error = ref('')

const handleLogin = () => {
  if (!name.value || name.value.trim() === '') {
    error.value = 'Por favor, digite seu nome'
    return
  }
  
  if (login(name.value)) {
    router.push('/')
  } else {
    error.value = 'Ocorreu um erro ao fazer login'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background-color: #2980b9;
}

.error-message {
  color: #e74c3c;
  margin-bottom: 1rem;
}
</style>

// 4. Agora, vamos criar uma página inicial protegida (pages/index.vue)
<template>
  <div class="welcome-container">
    <h1>Olá, {{ userName }}!</h1>
    <p>Você está logado com sucesso.</p>
    
    <div class="actions">
      <button @click="handleLogout" class="logout-button">
        Sair
      </button>
    </div>
  </div>
</template>

<script setup>
const { userName, logout } = useUserAuth()
const router = useRouter()

// Função para fazer logout
const handleLogout = () => {
  logout()
  router.push('/login')
}

// Middleware para proteger esta página
definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped>
.welcome-container {
  max-width: 600px;
  margin: 100px auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.actions {
  margin-top: 2rem;
}

.logout-button {
  padding: 0.5rem 1.5rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-button:hover {
  background-color: #c0392b;
}
</style>

// 5. Por fim, vamos criar um middleware para proteger as rotas (middleware/auth.js)
export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useUserAuth()
  
  // Verifica se o usuário está logado no lado do cliente
  if (process.client && !isLoggedIn()) {
    return navigateTo('/login')
  }
})