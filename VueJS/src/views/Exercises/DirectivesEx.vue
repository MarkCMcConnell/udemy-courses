<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
        <hr>
        <div
          style="width: 100px; height: 100px; background-color: lightgreen;"
          v-customOn:mouseenter="mouseEnter"
          v-customOn:mouseleave="mouseLeft"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clicked() {
      alert('I was clicked');
    },
    mouseEnter() {
      console.log('Mouse Entered');
    },
    mouseLeft() {
      console.log('Mouse Left');
    },
  },
  directives: {
    customOn: {
      bind(el, binding) {
        // el.onclick = () => {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;

        el.addEventListener(type, fn);
      },
    },
  },
};
</script>

<style>

</style>
