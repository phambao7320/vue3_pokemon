<template>
    <div class="card__item" :class="{'revemoBg': isRemove}">
        <div v-if="!isRemove" class="card__content" :class="{'card__animation' : isActive}"
            @click="onToggleActiveCard(imageCard,position)">
            <div class="card__face card__face-front"></div>
            <div class="card__face card__face-back" 
                :style="{'background-image': `url(${require(`../assets/images/${imageCard}.png`)})`,}">
            </div>
        </div>
        <div v-else></div>
    </div>
</template>

<script>
export default {
    props: {
        imageCard : Number,
        position: Number,
    },
    data() {
        return {
            isActive: false,
            isRemove: false,
        }
    },
    emits: ["onSelect"],
    methods: {
        onToggleActiveCard(item,position) {
            this.isActive = !this.isActive;
            this.$emit("onSelect", { item,position });
        },
        onToggleActiveCard2(){
            this.isActive = false;
        },
        onToggleRemove(){
            this.isRemove = true;
        }
    },
}
</script>

<style lang="css" scoped>
.card__item {
    width: 120px;
    height: 200px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 8px;
    cursor: pointer;
}
.card__item.revemoBg{
    box-shadow: none;
}

.card__animation {
    transform: rotateY(-180deg);
}
.card__content {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: flip 3s linear;
    transition: transform 1s;
}
.card__face{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 8px;
}
.card__face-front {
    background-image: url('../assets/images/icon_back.png') ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    width: 100%;
    height: 100%;
    background-color: #333;
}
.card__face-back {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    background-color: #fff;
    transform: rotateY(-180deg);
}

</style>