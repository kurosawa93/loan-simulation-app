<template>
  <div>
    <queue-component></queue-component>
  </div>
</template>

<script>
// @ is an alias to /src
import QueueComponent from "@/components/QueueComponent.vue";

export default {
  name: "home",
  components: {
    QueueComponent
  }
};
</script>
