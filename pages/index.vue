<template>
  <main class="container">
    <app-header/>
    <app-restaurant-info />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue';
export default {
  components: {
    AppHeader,
    AppRestaurantInfo
  }
};
</script>
