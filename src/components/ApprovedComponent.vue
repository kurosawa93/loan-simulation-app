<template>
  <table style="width: 100%;">
    <thead>
      <tr>
        <th v-for="(key, index) in columns" v-bind:key="index">
          <span>{{ key }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in objects" v-bind:key="index">
        <td v-for="(key, index) in columns" v-bind:key="index">
          {{ entry[key] }}
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
    async mountData() {
      this.objects = [];
      const result = await axios.get(
        "http://localhost:3333/api/data?status=approved"
      );
      if (result.data.data) {
        for (const data of result.data.data) {
          this.objects.push(data);
        }
      }
    }
  }
};
</script>
