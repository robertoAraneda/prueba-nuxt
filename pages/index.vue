<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { useDefaultStore } from '~/stores/default.store';


  definePageMeta({
    layout: 'default',
    name: 'Home',
    title: 'Home',
  })

  const inputValue = ref<string>("")
  const test = ref<any>(null)
  const store = useDefaultStore()

onMounted(async () => {
  const data = await store.fetchTodo()
  console.log('mounted')
  console.log(data)
  test.value = data
})

</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <pre>{{ test }}</pre>
    <BaseInput v-model="inputValue" label="Type something" />
    <BaseInput v-model="inputValue" label="Type something" />
    <BaseInput v-model="inputValue" label="Type something" />
    <BaseInput v-model="inputValue" label="Type something" />
    <BaseDatatable />
    <pre>{{ inputValue }}</pre>
  </div>
</template>