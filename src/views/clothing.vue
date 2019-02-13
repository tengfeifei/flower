<template>
  <div id="clothing">
  
  <ul>
        <li v-for="data in looplist" @click="handleClick(data)" >
            {{data}}
        </li>
  </ul> 

  </div>
</template>
<script>
    export default {
        data(){
            return{
                looplist:['大衣','棉衣','羽绒服']
            }
        },
        methods:{
        handleClick(index){
            // console.log(index);
            this.$router.push(`/listing/${index}`)
            // this.$router.push({name:"kerwindetail",params:{myid:index}})
        
            // this.$router.push(`/detail?id=${index}`);
            // this.$router.push({path:"/detail",query:{id:index,name:"kerwin"}})// /detail?id=4487
        },
}
};
</script>
<style lang="scss">

</style>
