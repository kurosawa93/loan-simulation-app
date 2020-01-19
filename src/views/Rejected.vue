<template>
  <div>
    <rejected-component></rejected-component>
  </div>
</template>

<script>
// @ is an alias to /src
import RejectedComponent from "@/components/RejectedComponent.vue";

export default {
  name: "home",
  components: {
    RejectedComponent
  }
};
</script>
