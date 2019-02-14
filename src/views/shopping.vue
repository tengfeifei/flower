<template>
  <div id="shopping">
    <div class="header"><span>登录</span>
    <input type="text" placeholder="大家正在搜索" >
    </div>
      <ul>
        <router-link to="/shopping/today" tag="li" activeClass="active">今日推荐</router-link>
        <router-link to="/shopping/last" tag="li" activeClass="active">最后疯抢</router-link>
        <router-link to="#1" tag="li" activeClass="active">美妆</router-link>
        <router-link to="/shopping/mom" tag="li" activeClass="active">母婴</router-link>
        <router-link to="#3" tag="li" activeClass="active">国际</router-link>
        <router-link to="#4" tag="li" activeClass="active">家电</router-link>
        <router-link to="#5" tag="li" activeClass="active">家具</router-link>
        <router-link to="#6" tag="li" activeClass="active">生活</router-link>
        <router-link to="#7" tag="li" activeClass="active">唯品.奢</router-link>
      </ul>

    
 
   <router-view></router-view>
  </div>
</template>
<script>
    import axios from "axios"
    export default{
        

    };
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
.header{
    height: 50px;
   
}
input{
    height: 32px;
    border-radius:30px;
    width: 75%;
    color:#bbb;
    text-indent: 20px;
    background: #eee;
    border: 1px solid #ccc;
    margin-top:9px;
}
span{
    display: block;
    float: left;
    line-height: 50px;
    width: 12%;
    text-align: center;
    font-size: 14px;
}
ul{
    width: 87%;
    display: flex;
    line-height: 45px;
    height: 45px;
    overflow: auto;
    white-space:nowrap; 
    text-align: center;

}
li{
    margin-right: 12px;
}
.active{
    border-bottom:2px solid #f6c;
    color:#f6c;
}
</style>
