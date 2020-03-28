<template>
  <div class="traffic-light">
    <div class="head">
      <LightItem
        v-for="(light, i) of lights"
        v-bind:index="i"
        v-bind:light="light"
        v-on:next-light="next"
      />
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import LightItem from "./LightItem";
export default {
  mounted() {
    console.log(this.color);
    this.offAllActive(this.color);
    this.lights = this.getAllLights();
  },
  data() {
    return {
      lights: []
    };
  },
  props: {
    color: String
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
      const url = "/" + this.lights[index + this.lights[index].step].color;
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss">
@mixin lights($color) {
  background-color: $color;
  box-shadow: 0 0 25px $color;
}

.traffic-light {
  width: 500px;
  height: 500px;
  margin: auto;
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    width: 150px;
    height: 250px;
    margin: auto;
    background-color: lighten(#000, 20%);
  }
  .body {
    width: 30px;
    height: 300px;
    margin: auto;
    background-color: grey;
  }
}
</style>
