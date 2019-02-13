<template>
  <div id="list">
  
  <ul>
        <li v-for="data in detailist" @click="handleClick(data)" >
            {{data}}
        </li>
  </ul> 

  </div>
</template>
<script>
    export default {
        data(){
            return{
                detailist:['潮人潮牌','aoo','app']
            }
        },
        methods:{
        handleClick(index){
            // console.log(index);
            this.$router.push(`/detail/${index}`)
            // this.$router.push({name:"kerwindetail",params:{myid:index}})
        
            // this.$router.push(`/detail?id=${index}`);
            // this.$router.push({path:"/detail",query:{id:index,name:"kerwin"}})// /detail?id=4487
        },
}
};
</script>
<style lang="scss">

</style>
