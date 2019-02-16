<template>
  <div id="today">

   <div class="banner" v-if="list">
<img :src="list.data.data.floor_list[1].data.operation_data.data.block[0].child[0].data.imageUrl" alt="">
    </div>
  <ul v-if='list'>
        <li v-for="data in list.data.data.floor_list[2].data.operation_data.data.block[0].child" @click="handleClick(data)" >
            <img :src="data.data.images[0].path" alt="">
        </li>
  </ul>
 <ul v-if='list'>
        <li v-for="data in list.data.data.floor_list[3].data.operation_data.data.block[0].child" @click="handleClick(data)" >
            <img :src="data.data.images[0].path" alt="">
        </li>
  </ul>
  <div class="conson" v-if="list">
   <img :src="list.data.data.floor_list[4].data.operation_data.data.block[0].child[0].data.imageUrl" >
  </div>
<div class="main" :style="{background: 'url('+ img +')' + 'top' }" v-if='list'>
    <p class="main_p" v-if="list">
        {{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[1].lightArtLabel.text}} | {{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[3].lightArtLabel.text}}
        <span v-if='hours'>{{hours}}</span>
        <span class="dian" v-if="seconds">:</span>
        <span v-if="minutes">{{minutes}}</span>
        <span class="dian" v-if="seconds">:</span>
        <span v-if="seconds">{{seconds}}</span>
    </p>
    <ul class="main_ul">
      <li class="main_li">
        <img :src="list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[5].lightArtImage.imageUrl">
        <p>
          <span>{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[6].lightArtLabel.text}}</span>
          {{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[7].lightArtLabel.text}}
        </p>
        <p class="p1">{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[8].lightArtLabel.text}}</p>
      </li>
      <li class="main_li">
        <img :src="list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[9].lightArtImage.imageUrl">
        <p class="p2">
          <span>{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[10].lightArtLabel.text}}</span>
          {{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[11].lightArtLabel.text}}
        </p>
        <p class="p3">{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[12].lightArtLabel.text}}</p>
      </li>
      <li class="main_li">
        <img :src="list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[13].lightArtImage.imageUrl">
        <p class="p4">
          <span>{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[14].lightArtLabel.text}}</span>
          {{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[15].lightArtLabel.text}}
        </p>
        <p class="p5">{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[16].lightArtLabel.text}}</p>
      </li>
      <li class="main_li">
        <img :src="list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[17].lightArtImage.imageUrl">
        <p class="p6">
          <span>{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[18].lightArtLabel.text}}</span>
          {{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[19].lightArtLabel.text}}
        </p>
        <p class="p7">{{list.data.data.floor_list[6].data.resourceGroupList[0].resourceList[20].lightArtLabel.text}}</p>
      </li>
<<<<<<< HEAD

=======
>>>>>>> 09233d549358193c0622ab13e09b4ee9387019b0
    </ul>
</div>
    <ul class="nav" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <li v-for='more in moreList' class="nav_li">
        <img :src="more.data.brand.brand_image">
        <h1>{{more.data.brand.title}} <span>{{more.data.brand.remain_days}}</span></h1>
        <p>{{more.data.brand.discount}}{{more.data.brand.pms_text}}</p>
      </li>
    </ul>

  </div>
</template>
<script>

import axios from 'axios'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

export default {

  data () {
    return {

      list: null,
      img: null,
      endTime: null,
      startTime: null,
      nowTime: null,
      end: 0,
      hours: null,
      minutes: null,
      seconds: null,
      moreList:null,
      brand:[],
      busy: false

    }
  },
  mounted () {
    axios({
      url: 'vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E4%BB%8A%E6%97%A5%E6%8E%A8%E8%8D%90&app_name=shop_wap&app_version=4.0&mars_cid=1550039673000_d5cd19b4d43084cdc2d64a76ffddb948&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20181203001&_=1550105618798'
    }).then(res => {
      this.list = res.data
      this.img = res.data.data.data.floor_list[6].data.resourceGroupList[0].resourceList[0].lightArtImage.imageUrl
      this.endTime = res.data.data.data.floor_list[6].data.resourceGroupList[0].resourceList[4].lightArtCountDown.endTime
      this.startTime = res.data.data.data.floor_list[6].data.resourceGroupList[0].resourceList[4].lightArtCountDown.startTime
      this.nowTime = this.endTime - this.startTime
      var self = this
      setInterval(function () {
        var now = new Date()
        var nows = Date.parse(now)
        self.end = self.endTime - nows

        self.hours = Math.floor(self.end / (60 * 60 * 1000))

        if (self.hours < 10) {
          self.hours = '0' + self.hours
        }
        var hours_change = self.end % (60 * 60 * 1000)
        self.minutes = Math.floor(hours_change / (60 * 1000))
        if (self.minutes < 10) {
          self.minutes = '0' + self.minutes
        }
        var minutes_change = hours_change % (60 * 1000)
        self.seconds = Math.floor(minutes_change / 1000)
        if (self.seconds < 10) {
          self.seconds = '0' + self.seconds
        }
      }, 1000)
    })
    axios({
      url:'vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E4%BB%8A%E6%97%A5%E6%8E%A8%E8%8D%90&app_name=shop_wap&app_version=4.0&mars_cid=1550194062359_d6b94fd1409da66bd835ed2f64fa5af7&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20181203001&load_more_token=eyJjaGFubmVsX2lkIjoiNDkiLCJ0c2lmdCI6IjEiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI5In0%3D&_=1550201849886'
    }).then(res=>{
      this.moreList=res.data.data.data.floor_list
     
      this.moreList=this.moreList.filter((item)=>{
        return item.floor_type==="brand"
      })

    })
  },
  methods: {
    handleClick (index) {
      // console.log(index);
      this.$router.push(`/clothing/${index}`)
      // this.$router.push({name:"kerwindetail",params:{myid:index}})

      // this.$router.push(`/detail?id=${index}`);
      // this.$router.push({path:"/detail",query:{id:index,name:"kerwin"}})// /detail?id=4487
    },
     loadMore() {
      
      this.busy = true;
       axios({
      url:'vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E4%BB%8A%E6%97%A5%E6%8E%A8%E8%8D%90&app_name=shop_wap&app_version=4.0&mars_cid=1550194062359_d6b94fd1409da66bd835ed2f64fa5af7&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20181203001&load_more_token=eyJjaGFubmVsX2lkIjoiNDkiLCJ0c2lmdCI6IjEiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI5In0%3D&_=1550201849886'
    }).then(res=>{
      
      this.moreList=[...this.moreList,...res.data.data.data.floor_list]
      
      this.moreList=this.moreList.filter((item)=>{
        return item.floor_type==="brand"

      })
      this.busy=false

    })

      // setTimeout(() => {
      //   for (var i = 0, j = 10; i < j; i++) {
      //     this.data.push({ name: count++ });
      //   }
      //   this.busy = false;
      // }, 1000);
    } 

  },
  computed: {

  }
}
</script>
<style scoped lang="scss">
*{
    padding:0;
    margin:0;
}

.banner{
    margin-top:2px;
    width:100%;
    height: 16 0px;
     background-size: 80% 80% !important;

}

.main{
    width: 100%;
   height: 230px;
   background-size: 100% 100% !important;
   background-repeat: no-repeat !important;
   position:relative;
   .main_p{
    position: absolute;
   left:31%;
   height:22%;
   top: 22%;
   font-size: 13px;
   span{
    background:black;
    margin-right: 1px;
    color: white;
   }
   .dian{
    background:white;
    color: black
   }
}
.main_ul{
  position:absolute;

  width: 100%;
  top:30%;
  height:152px;
  li{
    width:25%;
    float:left;
    height:152px;
    img{
      width:80%;
      height:50%;
      margin-top: 10px
    }
    p{
      height:20px;
      font-size:12px;
      float: left;
      line-height:20px;
      position:absolute;
      top:67%;
      text-align:center;
      left:2%;
      span{
        background:#f6c;
        font-size:12px;
        color:#fff;

      }
    }
    .p1{
      top:77%;
      color: #ccc
    }
    .p2{
      left:28%;
    }
    .p3{
      left:28%;
      top:77%;
      color:#ccc;
    }
    .p4{
      left:53%;
    }
    .p5{
      left:52%;
      top:77%;
      color:#ccc;
    }
    .p6{
      left:78%;
    }
    .p7{
      left:78%;
      top:77%;
      color:#ccc;
    }
  }
}

 /*  background:url('list.data.data.floor_list[4].data.resourceGroupList[0].resourceList[0].lightArtImage.imageUrl');*/
}
.nav{
  width:100%;
  padding:0 4%;
  background:#f3f4f5;
  
  .nav_li{
  width:92%;
  height:250px;
  border-radius:20px;
  margin-top: 10px;
  line-height:0;
  border:1px solid ;
  border-color:rgb(232,233,235);
  background:#fff;
  img{
    width:100%;
    height:190px;
    border-radius:20px 20px 0 0;
  }
  h1{
    font-size:14px;
    height:28px;
    line-height:28px;
    text-align:left;
    text-indent: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-top: 8px;
    span{
      float:right;
      margin-right:10px;
      font-weight: 100;
      color:#ccc;
      font-size:12px;
    }
  }
  p{
    text-align:left;
    text-indent:10px;
    font-size:13px;
    height:15px;
    line-height:15px;
    color:#ccc;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  }
}

ul{

    list-style: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}
li{
    width: 20%;
    height: 75px;
    line-height: 75px;
}
img{
    width: 100%;
    height: 100%;
}
</style>
