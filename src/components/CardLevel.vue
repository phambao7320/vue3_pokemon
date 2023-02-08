<template>
  <button>
    <span>{{`${levelGame.block} x ${levelGame.block}`}}</span>
    <span>{{levelGame.level}}</span>
  </button>
</template>

<script>

export default {
    props : {
        levelGame: Object,
    },
}
</script>

<style lang="css" scoped>
span{
    color: white
}
button { 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    text-align: center;
    background: #000;
    border-radius: 8px;
    border: 1px solid white;
    cursor: pointer;
}

button:hover {
    background-color: rgb(33, 21, 101);
    transition: ease-in-out 300ms ;
}

button span:first-child{
    font-size: 30px;
}
button span:last-child{
    margin-top: 10px;
    font-size: 20px;
}
</style>