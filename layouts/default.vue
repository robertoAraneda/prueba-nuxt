<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/about">About</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>