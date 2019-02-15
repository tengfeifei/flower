<template>
  <div id="clothing">
    <mt-header title="花花钱" class="mycloth">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="backgroundpic">
        <ul>
            <li v-for="data in looplist" @click="handleClick(data)" >
                <img :src="data.data.imageUrl">
            </li>
        </ul>
        <ul>
            <li v-for="date in clothlist" @click="handleClick(date)" >
                <img :src="date.data.imageUrl">
            </li>
        </ul>
        <ul>
            <li v-for="datas in clothslist" @click="handleClick(datas)" >
                <img :src="datas.data.imageUrl">
            </li>
        </ul>
    </div>
    <img src="https://h2.appsimg.com/a.appsimg.com/upload/flow/2018/12/05/194/15440058682418.jpg" class="img1">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="swip in swipeslist" @click="handleClick(swip)" >
                <img :src="swip.pic">
            </div>
        </div>
    </div>
    <div class="dapai">
         <div v-for="dataa in img2list" @click="handleClick(dataa)" >
            <img :src="imgPath(dataa)" />
<!--             <img :style="imgStyle(dataa)">
 -->            <p>{{textPath(dataa)}}</p>
        </div>
    </div>
    <img src="http://b.appsimg.com/upload/momin/2018/11/13/117/1542092001276.jpg" class="img2">

    <div class="sales" v-infinite-scroll="loadMore" infinite-scroll-disabled="disable" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
         <div v-for="dete in biglist" @click="handleClick(dete)" class="sale">
            <img :src="dete.data.brand.brand_image">
            <div>
                <h2>{{dete.data.brand.title}}<span>{{dete.data.brand.remain_days}}</span></h2>
                <p>{{dete.data.brand.discount}}</p>
            </div>
         </div>

    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
// import infiniteScroll from 'vue-infinite-scroll'
// Vue.use(infiniteScroll)

Vue.component(Header.name, Header)

var arr=['eyJjaGFubmVsX2lkIjoiNjYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI5In0=_: 1550131853878','eyJjaGFubmVsX2lkIjoiNjYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIzMCIsImJyYW5kX3JlZmVyX2luZGV4IjoiOSJ9_: 1550133050439','eyJjaGFubmVsX2lkIjoiNjYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiI2MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiOSJ9_: 1550138087579','eyJjaGFubmVsX2lkIjoiNjYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiI5MCIsImJyYW5kX3JlZmVyX2luZGV4IjoiOSJ9_: 1550138113702']
export default {
  data () {
    return {
      looplist: [],
      clothlist: [],
      clothslist: [],
      swipeslist: [],
      img2list: [],
      biglist: [],
      disable: false,
      count:0

    }
  },
  mounted () {
    axios({
      url: 'vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E5%A5%B3%E8%A3%85&app_name=shop_wap&app_version=4.0&mars_cid=1550026078264_2b4c9fedc8a681df78ffea976839b8a7&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20180925001&_=1550061806101'

    }).then(res => {
      this.looplist = res.data.data.data.floor_list[0].data.operation_data.data.block[0].child
      this.clothlist = res.data.data.data.floor_list[1].data.operation_data.data.block[0].child
      this.clothslist = res.data.data.data.floor_list[2].data.operation_data.data.block[0].child
      this.swipeslist = res.data.data.data.floor_list[4].data.operation_data.contents
      this.$nextTick(() => {
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30
        })
      })
      this.img2list = res.data.data.data.floor_list[6].data.resourceGroupList[0].resourceList
      console.log(this.img2list)
    }),
    axios({
      url: 'vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E5%A5%B3%E8%A3%85&app_name=shop_wap&app_version=4.0&mars_cid=1550026078264_2b4c9fedc8a681df78ffea976839b8a7&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20180925001&load_more_token=eyJjaGFubmVsX2lkIjoiNjYiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI4In0%3D&_=1550120369034'

    }).then(res => {
      this.biglist = res.data.data.data.floor_list
      console.log(this.biglist)
    })
  },
  methods: {
    handleClick (index) {
      // console.log(index);
      this.$router.push(`/listing/${index}`)
    },
    imgPath (data) {
      if (data.lightArtImage) {
        return data.lightArtImage.imageUrl
      } else {
        return ''
      }
    },
    textPath (data) {
      if (data.lightArtLabel) {
        return data.lightArtLabel.text
      } else {
        return ''
      }
    },
    loadMore(){
      console.log('到底了');
      if(count>=4){
        return 
      } else{
        count++
          this.disable = true;
          if(this.biglist.length==30){
              return ;
          }
          axios({
              url:`vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E5%A5%B3%E8%A3%85&app_name=shop_wap&app_version=4.0&mars_cid=1550026078264_2b4c9fedc8a681df78ffea976839b8a7&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20180925001&load_more_token=arr[${count}]`
          }).then(res=>{
              this.biglist=res.data.data.data.floor_list;
                  console.log(this.biglist);
          })
      }
      
    }
    // imgStyle(dataa){
    //     console.log(dataa)
    //     if(dataa.lightArtImage){
    //         return { 'position':'absolute','left':dataa.lightArtImage.bounds.l+'px','top':dataa.lightArtImage.bounds.t+'px','height':'2.77333rem','width':'3.01333rem'}
    //     }else{
    //         return { }
    //     }
    // }
  }
}
</script>
<style lang="scss">
    *{
        padding: 0;
        margin:0;
    }
    #clothing{
        width: 100%;
        background: #fbfbfa;
        .mycloth{
            width: 100%;
            background: #fbfbfa;
            color: #000;
            font-size: 20px;
        }
    }
    .backgroundpic{
        ul{
            list-style:none;
            background: url(http://a.vpimg4.com/upload/flow/2019/01/15/84/15475559343193.jpg) no-repeat;
            background-size:100%;
            display:flex;
            li{
                flex:1;
                img{
                   width:100%;
                   display:block;
                }
            }
        }
    }
    .img1,.img2{
        width:100%;
    }
    .swiper-slide{
        img{
            width:100%
        }
    }
    .dapai{
        position:relative;
        height: 534px;
        div{
           position: absolute;
           img{
            display: block;
            width: 110px;
           }
        }
        div:nth-of-type(1){
            img{
                width: 100%;
            }
        }
        div:nth-of-type(3){
            padding:10px;
            left: 0;
            top:65px;
        }
        div:nth-of-type(2){
            left: 40px;
            top:190px;
        }
        div:nth-of-type(5){
            img{
                width:70px;
            }
            left: 30px;
            top:150px;
            background: #fff;
        }
        div:nth-of-type(6){
            left:130px;
            top:75px;
        }
        div:nth-of-type(8){
            img{
                width:70px;
            }
            left: 150px;
            top:150px;
            background: #fff;
        }
        div:nth-of-type(9){
            left: 155px;
            top:190px;
        }
        div:nth-of-type(10){
            left:251px;
            top:75px;
        }
        div:nth-of-type(12){
            img{
                width:70px;
            }
            left: 270px;
            top:150px;
            background: #fff;
        }
        div:nth-of-type(13){
            left: 272px;
            top:190px;
        }
        div:nth-of-type(14){
            left: 10px;
            top:220px;
        }
        div:nth-of-type(16){
            img{
                width:70px;
            }
            left: 30px;
            top:295px;
            background: #fff;
        }
        div:nth-of-type(17){
            left: 40px;
            top:330px;
        }
        div:nth-of-type(18){
            left:130px;
            top:220px;
        }
        div:nth-of-type(20){
            img{
                width:70px;
            }
            left: 150px;
            top:295px;
            background: #fff;
        }
        div:nth-of-type(21){
            left: 155px;
            top:330px;
        }
        div:nth-of-type(22){
            left:251px;
            top:220px;
        }
        div:nth-of-type(24){
            img{
                width:70px;
            }
            left: 270px;
            top:295px;
            background: #fff;
        }
        div:nth-of-type(25){
            left: 272px;
            top:330px;
        }
        div:nth-of-type(26){
            left: 10px;
            top:370px;
        }
        div:nth-of-type(28){
            img{
                width:70px;
            }
            left: 30px;
            top:445px;
            background: #fff;
        }
        div:nth-of-type(29){
            left: 40px;
            top:480px;
        }
        div:nth-of-type(30){
            left:130px;
            top:370px;
        }
        div:nth-of-type(32){
            img{
                width:70px;
            }
            left: 150px;
            top:445px;
            background: #fff;
        }
        div:nth-of-type(33){
            left: 155px;
            top:480px;
        }
        div:nth-of-type(34){
            left:251px;
            top:370px;
        }
        div:nth-of-type(36){
            img{
                width:70px;
            }
            left: 270px;
            top:445px;
            background: #fff;
        }
        div:nth-of-type(37){
            left: 272px;
            top:480px;
        }

    }
    .sales{
        background:#f3f4f5;
        padding:0 10px;
    }
    .sale{
        border-radius: 5px;
        img{
            width: 100%;
        }
        div{
            background: #fff;
            margin-bottom:10px;
            border-bottom-right-radius:5px;
            border-bottom-left-radius:5px;
            padding:0 10px;
            h2{
                font-size: 16px;
                span{
                    float: right;
                    font-weight: 100;
                    color:#ccc;
                }
            }
            p{
                color: #777;
            }

        }
    }

</style>
