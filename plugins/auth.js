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