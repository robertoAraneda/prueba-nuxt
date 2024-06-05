export default defineNuxtPlugin(() => {
    return {
        provide: {
            localStorage: {
                getItem(item: string) {
               
                        return sessionStorage.getItem(item)
                    
                },

                setItem(item: string, value: unknown) {
               
                        return sessionStorage.setItem(item, JSON.stringify(value))
                    
                }
            }
        }
    }
})