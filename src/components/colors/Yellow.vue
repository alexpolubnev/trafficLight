<template>
  <TrafficLight v-bind:color="'yellow'" />
</template>

<script>
import TrafficLight from "../TrafficLight";
export default {
  components: {
    TrafficLight
  }
};
</script>
