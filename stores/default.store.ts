import { defineStore } from "pinia";
import {useHttp} from "~/composables/useHttp"

export const useDefaultStore = defineStore("defaultStore", () => {

  const http = useHttp()

  async function fetchTodo(){
    const { $localStorage } = useNuxtApp()


    const response = await http.getRequest("/todos/1")

    $localStorage.setItem("todo", response)
    $localStorage.getItem("todo")

    console.log(response)

    return response
  }

  return {
    fetchTodo
  }
})