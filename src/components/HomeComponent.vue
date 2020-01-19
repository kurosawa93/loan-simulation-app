<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <input type="file" id="file" ref="file" v-on:change="handleFile" />
      <v-btn fab class="mt-5 brown darken-4" @click="uploadFiles">
        <v-icon color="white">U</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeComponent",
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleFile() {
      this.file = this.$refs.file.files[0];
    },
    async uploadFiles() {
      if (!this.file) {
        alert("Silakan pilih file terlebih dahulu");
        return;
      }
      const form = new FormData();
      form.append("file", this.file);

      try {
        const result = await axios.post(
          "http://localhost:3333/api/upload",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );
        this.file = null;
        alert("File berhasil di upload. " + result.data.meta.message);
      } catch (error) {
        alert("File gagal di upload. " + error.message);
      }
    }
  }
};
</script>
