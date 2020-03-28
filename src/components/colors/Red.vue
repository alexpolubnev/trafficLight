<template>
  <TrafficLight v-bind:color="'red'" />
</template>

<script>
import TrafficLight from "../TrafficLight";
export default {
  components: {
    TrafficLight
  }
};
</script>
