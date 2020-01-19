<template>
  <div>
    <approved-component></approved-component>
  </div>
</template>

<script>
// @ is an alias to /src
import ApprovedComponent from "@/components/ApprovedComponent.vue";

export default {
  name: "home",
  components: {
    ApprovedComponent
  }
};
</script>
