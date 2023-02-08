<template>
    <div class="setup" :style="{'max-width': sizeOfScreen + 'px'}">
        <div class="config">
            <card-item-vue 
                v-for="(item,index) in matrixRandom" 
                :key="index"
                :ref="`card-${index}`" 
                :position="index" 
                :imageCard="item" 
                @onSelect="onHandleSelectCard($event)"
        />
        </div>
    </div>
</template>

<script>
import CardItemVue from './CardItem.vue';
import { checkValue } from '@/utils/index';

export default {
    props: {
        matrixRandom: Array,
        sizeOfScreen: Number,
    },
    data() {
        return {
            listCard : [],
        }
    },
    components : {
        CardItemVue,
    },
    methods : {
        onHandleSelectCard(card) {
            this.listCard.push(card) ;
            if ( this.listCard.length === 2 ) {
                if ( checkValue(this.listCard[0],this.listCard[1]) ){
                    setTimeout( () => {
                        this.$refs[`card-${this.listCard[0].position}`][0].onToggleRemove();
                        this.$refs[`card-${this.listCard[1].position}`][0].onToggleRemove();
                        this.listCard = []
                    },800)
                }
                else{
                    setTimeout( () => {
                        this.$refs[`card-${this.listCard[0].position}`][0].onToggleActiveCard2();
                        this.$refs[`card-${this.listCard[1].position}`][0].onToggleActiveCard2();
                        this.listCard = []
                    },800)
                }
            }
        }
    }
}
</script>

<style scoped lang="css">
    .setup{
        max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
    }
    .config {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
    }
</style>