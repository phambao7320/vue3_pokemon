<template>
    <div class="screenCenter">
        <h1>POKE MEMORIES</h1>
        <span>Select mode to start game</span>
        <div class="flex-button-mode">
            <card-level-vue 
                v-for="(modeGame,index) in modeGames" :key="index"
                :levelGame="modeGame" @click="onStart(modeGame.block*modeGame.block)" 
            />
        </div>
        <span>This game owned by BAP in Vue3</span>
    </div>
</template>

<script>
import CardLevelVue from "./CardLevel.vue";
export default {
    data() {
        return {
            modeGames : [
                {
                    block: 4,
                    level: "Easy",
                },
                {
                    block: 6,
                    level: 'Normal',
                },
                {
                    block: 8,
                    level: 'Medium',
                },
                {
                    block: 10,
                    level: 'Super',
                },
            ]
        }
    },
    components : {
        CardLevelVue,
    },
    emits: ["onStart"],
    methods: {
        onStart(numberOfBlock) {
            this.$emit("onStart", { numberOfBlock });
        },
    },
}
</script>

<style scope lang="css">
.screenCenter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 100vh;
}
h1{
    font-size: 70px;
}
span{
    font-size: 40px;
}
.flex-button-mode{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
</style>