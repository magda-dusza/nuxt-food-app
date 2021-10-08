<template>
    <main class="container">
        <div class="item-img" :style="`background: url(../${currentItem.img}) no-repeat center center`"></div>
        <div class="item-desc">
            <h3>Description:</h3>
            <p>{{currentItem.description}}</p>
        </div>
        <div class="item-options">
            <h1>{{currentItem.item}}</h1>
            <h3>Price: {{formatPrice(currentItem.price)}}</h3> 
            <div class="quantity">
                <input min="1" type="number" v-model="counter"/>
                <button>Add to cart - {{formatPrice(sumPrice)}}</button>
            </div>
            <fieldset>
                <legend><h3>Options</h3></legend>
                <div v-for="option in currentItem.options" :key="option">
                    <input v-model="chosenOption" type="radio" :id="option" :value="option"/>
                    <label :for="option">{{option}}</label>
                </div>
            </fieldset>
            <fieldset>
                <legend><h3>Add ons</h3></legend>
                <div v-for="option in currentItem.addOns" :key="option">
                    <input v-model="chosenAddons" type="checkbox" :id="option" :value="option"/>
                    <label :for="option">{{option}}</label>
                </div>
            </fieldset>
        </div>
    </main>
</template>
<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            id: this.$route.params.id,
            counter: 1,
            chosenOption: '',
            chosenAddons: [],
        }
    },
    computed: {
        ...mapState(['fooddata']),
        currentItem(){
            let result;

            for(let i=0;i<this.fooddata.length;i++){
                for(let j=0;j<this.fooddata[i].menu.length;j++){
                    if(this.fooddata[i].menu[j].id === this.id){
                        result = this.fooddata[i].menu[j];
                    }
                }
            }
            return result;
        },
        sumPrice(){
            return this.sumPrice = this.counter ? this.counter * this.currentItem.price : this.currentItem.price;

        }
    },
    methods: {
        formatPrice(price){
            return '$' + price.toFixed(2)
        }
    },
}
</script>
<style lang="scss" scoped>
    .container {
        width: 1000px;
        margin: 100px auto;
        display: grid;
        grid-template-columns: 400px 1fr;
        grid-template-rows: 400px 1fr;
        grid-column-gap: 60px;
        grid-row-gap: 60px;
        line-height: 2;
    
    }

    .item-img { 
        grid-area: 1/1/2/2;
        background-size: cover;
    }
    .item-desc { grid-area: 2/1/3/2; }
    .item-options { 
        grid-area: 1/2/2/3;
        position: relative; 
    }
</style>