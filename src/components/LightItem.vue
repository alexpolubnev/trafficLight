<template>
    <div class="light"
      v-bind:class="[light.color, {active: light.active}]"
    ></div>
</template>

<script>
export default {
  mounted() {
    if(this.light.active){
      this.next()
    }
  },
  props: {
    light:{
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    next(){      
      setTimeout(()=>{
        this.$emit('next-light', this.index)
      },this.light.time * 1000)
    }
  }
};
</script>

<style lang="scss">
  @mixin lights($color) {
  background-color: $color;
  box-shadow: 0 0 25px $color;
}

.light {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
  &.green {
    background-color: darken(rgb(0, 179, 0), 20%);
    &.active {
      @include lights(rgb(0, 216, 0));
    }
  }
  &.yellow {
    background-color: darken(yellow, 20%);
    &.active {
      @include lights(yellow);
    }
  }
  &.red {
    background-color: darken(red, 20%);
    &.active {
      @include lights(red);
    }
  }
}
</style>
