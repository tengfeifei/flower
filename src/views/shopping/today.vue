<template>
  <div id="today">
   
  <ul>
        <li v-for="data in datalist" @click="handleClick(data)" >
            {{data}}
        </li>
  </ul> 

  </div>
</template>
<script>



    export default {
        data(){
            return{
                datalist:['女装','男装','童装']
            }
        },
        methods:{
        handleClick(index){
            // console.log(index);
            this.$router.push(`/clothing/${index}`)
            // this.$router.push({name:"kerwindetail",params:{myid:index}})
        
            // this.$router.push(`/detail?id=${index}`);
            // this.$router.push({path:"/detail",query:{id:index,name:"kerwin"}})// /detail?id=4487
        },
}
};
</script>
<style lang="scss">

</style>
