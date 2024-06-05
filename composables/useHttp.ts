export const useHttp = ()  => {

    const defaultFetchFunction = async (url: string, options = {}) => {
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json'
            },
            onRequest: async (response: Response) => {
                if(response.status === 401){
                    console.log('Token expired')
                }
            }
        }
    }


    //get
    const BASE_URL = 'https://jsonplaceholder.typicode.com'
    const getRequest = async (url: string, options = {}) => {
       return $fetch(`${BASE_URL}${url}`, {...options, method: 'GET', })
    }

    //post
    const postRequest = async (url: string, options = {}) => {
       return $fetch(`${BASE_URL}${url}`, {...options, method: 'POST'})
    }

  return {
    getRequest,
    postRequest
  }
}