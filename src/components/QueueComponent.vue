<template>
  <table style="width: 100%;">
    <thead>
      <tr>
        <th v-for="(key, index) in columns" v-bind:key="index">
          <span>{{ key }}</span>
        </th>
        <th>
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in objects" v-bind:key="index">
        <td v-for="(key, index) in columns" v-bind:key="index">
          {{ entry[key] }}
        </td>
        <td>
          <v-btn @click="evaluate(entry.id)">
            Evaluasi
          </v-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      objects: [],
      columns: [
        "fullName",
        "gender",
        "dateOfBIrth",
        "addresses",
        "identityCard",
        "npwp",
        "residentalStatus",
        "hasOccupations",
        "collectibilityStatus",
        "monthlyExpense",
        "loanAmount",
        "loanPeriod"
      ]
    };
  },
  async mounted() {
    await this.mountData();
  },
  methods: {
    async evaluate(id) {
      try {
        await axios.post("http://localhost:3333/api/data/" + id);
        await this.mountData();
        alert("Evaluasi Berhasil");
      } catch (error) {
        alert("Gagal Evaluasi." + error.message);
      }
    },
    async mountData() {
      this.objects = [];
      const result = await axios.get("http://localhost:3333/api/data");
      if (result.data.data) {
        for (const data of result.data.data) {
          this.objects.push(data);
        }
      }
    }
  }
};
</script>
