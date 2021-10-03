<template>
<main class="container restaurant">
    <div class="restaurantheading">
        <h1>Restaurants:</h1>
        <app-select @changeSelect="updateSelectedRestaurant"/>
        <pre>{{$data}}</pre>
    </div>
    <app-restaurant-info/>
</main>
</template>
<script>
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'
import AppSelect from '@/components/AppSelect.vue'
export default {
    components: {
        AppRestaurantInfo,
        AppSelect

    },
    data(){
        return {
            selectedRestaurant: ''
        }
    },
    methods: {
        updateSelectedRestaurant(val){
            this.selectedRestaurant = val;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>