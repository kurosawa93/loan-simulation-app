<template>
  <v-toolbar color="brown darken-4" dark>
    <v-btn>
      <router-link to="/">Home</router-link>
    </v-btn>
    <v-btn>
      <router-link to="/queue">Antrian</router-link>
    </v-btn>
    <v-btn>
      <router-link to="/approved">Disetujui</router-link>
    </v-btn>
    <v-btn>
      <router-link to="/rejected">Ditolak</router-link>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "AppNavigation"
};
</script>

<style scoped></style>
