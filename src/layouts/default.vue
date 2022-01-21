<template>
  <div>
    <nav-bar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
export default {
  components: { NavBar },
  setup() {},
};
</script>


