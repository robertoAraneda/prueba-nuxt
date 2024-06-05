export default defineNuxtPlugin(() => {
  return {
    provide: {
      sessionStorage: {
        getItem: (key: string) => window.sessionStorage.getItem(key),
        setItem: (key: string, value: string) => window.sessionStorage.setItem(key, value),
        removeItem: (key: string ) => window.sessionStorage.removeItem(key)
      }
    }
  }
})