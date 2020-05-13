<template>
<div class="dropdown">
  <button class="dropbtn" @click.prevent="toggleMenu"><font-awesome-icon icon="bars"/></button>
    <!-- <i class="fa fa-bars" aria-hidden="true"></i> -->
</div>
</template>

<script>
export default {
   methods: {
    toggleMenu() {
      window.bus.$emit('menu/toggle');
    },
  },
};
</script>
<style>
.dropbtn {
  background-color:var(--secondary-color);
  color: white;
  padding: 5px;
  font-size: 20px;
  border: none;
}

.icon{
  background-color:none;
  color: white;
  padding: 5px;
  font-size: 15px;
  border: none;
}

</style>