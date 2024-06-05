<script setup lang="ts">

import { useAttrs } from 'vue';

const model = defineModel<string | number>();

</script>

<template>
  <v-text-field v-model="model"></v-text-field>
</template>