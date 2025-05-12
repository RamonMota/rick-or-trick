export default defineNuxtPlugin(() => {
    return {
      provide: {
        auth: {
          login(name) {
            if (!name || name.trim() === '') {
              throw new Error('Nome não pode estar vazio')
            }
            
            localStorage.setItem('userName', name)
            return name
          },
          
          isLoggedIn() {
            if (process.client) {
              return !!localStorage.getItem('userName')
            }
            return false
          },
          
          getUserName() {
            if (process.client) {
              return localStorage.getItem('userName')
            }
            return null
          },
          
          logout() {
            localStorage.removeItem('userName')
          }
        }
      }
    }
  })