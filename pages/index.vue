<template>
  <main class="container">
    <app-header/>
    <app-restaurant-info :restaurants="fooddata"/>
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue';
import {mapState} from 'vuex';
export default {
  components: {
    AppHeader,
    AppRestaurantInfo
  }, 
  computed: {
    ...mapState(['fooddata'])
  }
};
</script>
