<template>
  <div class="head">
    <LightItem
      v-for="(light, i) of lights"
      v-bind:index="i"
      v-bind:light="light"
      v-on:next-light="next"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import LightItem from "../LightItem";
export default {
  mounted() {
    this.offAllActive('green')
    this.lights = this.getAllLights();
  },
  data() {
    return {
      lights: []
    };
  },
  components: {
    LightItem
  },
  methods: {
    ...mapGetters(["getAllLights"]),
    ...mapActions(["nextLight"]),
    ...mapMutations(["offAllActive"]),
    next(index) {
      this.nextLight(index);
      const url = '/' + this.lights[index + this.lights[index].step].color
      this.$router.push(url);
    }
  }
};
</script>
