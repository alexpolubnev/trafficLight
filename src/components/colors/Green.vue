<template>
  <TrafficLight v-bind:color="'green'" />
</template>

<script>
import TrafficLight from "../TrafficLight";
export default {
  components: {
    TrafficLight
  }
};
</script>
