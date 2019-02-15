<template>
  <div id="app">
     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="swip in swipeslist" id="img1">
                <img :src="swip.url">
            </div>
            
        </div>
        <div class="swiper-pagination">.</div>
    </div> 
    <h3>2019春新款灯笼袖女上衣蕾丝雪纺衬衫打底衫<span>$20</span></h3>
    <div class="xiq">
        <div class="xq1">
            <div class="xq" v-for="data in xqslist" >
                <img :src="data.url">
            </div>            
        </div>
      
    </div>  
  </div>

</template>
<script type="text/javascript">
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import Vue from 'vue'
    export default {
      data () {
        return {
          swipeslist:[{url:require('../assets/img/1.jpg')},{url:require('../assets/img/2.jpg')},{url:require('../assets/img/3.jpg')},{url:require('../assets/img/4.jpg')}],
          xqslist:[{url:require('../assets/img/5.jpg')},{url:require('../assets/img/6.jpg')},{url:require('../assets/img/7.jpg')},{url:require('../assets/img/8.jpg')},{url:require('../assets/img/9.jpg')},{url:require('../assets/img/10.jpg')},{url:require('../assets/img/11.jpg')},{url:require('../assets/img/12.jpg')},{url:require('../assets/img/13.jpg')}]
        }
      },
      mounted () {
        this.$nextTick(() => {
            var swiper = new Swiper('.swiper-container', {
              slidesPerView: 1,
              spaceBetween: 0,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            })
        })
      }
    }
</script>
<style lang="scss">
    .swiper-container{
        position: relative;
    }
    #img1{
        img{
            width: 100%;
            height: 375px;
    
        }
    }
    .swiper-pagination{
        position:absolute;
        left:200px;
        top: 300px;
    }
    .xq{
        img{
            width: 100%
        }
    }
    h3{
        font-size: 18px;
        padding:10px;
        font-weight: 100;
        span{
            float: right;
        }
    }
</style>
