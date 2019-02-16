<template>
  <div id="mom">
      <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in slidelist">

            	<img :src="data.imgFullPath" alt="">
            </div>

          </div>
          <div class="swiper-pagination"></div>
      </div>

      <div class="options">
      	<ul class="option_item_one">
      	   <li v-for="cloth in clotheslistone" @click="handleclick(cloth.data.id)">
      	   	<img :src="cloth.data.imageUrl" alt="">
      	   </li>
        </ul>
     	  <ul class="option_item_two">
     		  <li v-for="cloth in clotheslisttwo" @click="handleclick(cloth.data.id)">
               <!-- {{cloth}} -->
      	   	    <img :src="cloth.data.imageUrl" alt="">
     		  </li>
     	  </ul>

     	  <ul class="option_item_three">
     		  <li v-for="cloth in clotheslistthree" @click="handleclick(cloth.data.id)">
     			  <img :src="cloth.data.imageUrl" alt="">
     		  </li>
     	  </ul>
      </div>


      <div class="fast_capture" :style="{backgroundImage:'url('+bgimg+')'}" >
      	   <div class="strat_end_time">
      	   	  <div class="time_point">
      	   	   	<span>{{startTime}}点场</span>
      	   	 	  <span> &nbsp;&nbsp;| </span>
      	   	  </div>
      	   	  <ul class="timeout">
                <li>还剩</li>
      	   	  	<li>{{endhour}}</li>
      	   	  	<li>:</li>
      	   	  	<li>{{endminute}}</li>
      	   	  	<li>:</li>
      	   	  	<li>{{endsecond}}</li>
      	   	  </ul>
      	   </div>

            <ul class="banner">
                <li v-for="data in bannerlist">
                	<div class="bannerimg">
                		<img :src="data[0].lightArtImage.imageUrl" alt="">
                	</div>
                	<p class="fast-price-font">{{data[1].lightArtLabel.text}}</p>
                	<p class="fast-price">{{data[2].lightArtLabel.text}}</p>
                	<p class="fast-price-origin">{{data[3].lightArtLabel.text}}</p>
                </li>

            </ul>
      </div>
      <div class="update-special-img">
        <img :src="todayimg" alt="">
      </div>

      <ul class="type-mst" v-show="mstShow">
        <li v-for="data in mstlist">
          <img :src="data.data.special.image" alt="">
        </li>
      </ul>
      <ul class="sectionlist" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100" infinite-scroll-immediate-check="true">
      	<li v-for="data in brandlist" @click="handleclick(data.data.brand.brand_id)">
      		<div class="brandimg">
      			<img :src="data.data.brand.brand_image" alt="">
      		</div>
      		<div class="brand-detail">
        		<div class="brand-description">{{data.data.brand.title}}</div>
        		<div class="over-time">{{data.data.brand.remain_days}}</div>
        		<div class="discount">{{data.data.brand.discount}}</div>
      		</div>
      	</li>
      </ul>
      <!-- </div> -->
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
import { Indicator } from 'mint-ui'
Vue.use(infiniteScroll)
export default {
  data () {
    return {
      slidelist: [],
      clotheslistone: [],
      clotheslisttwo: [],
      clotheslistthree: [],
      bannerlist: [],
      bgimg: null,
      startTime: 0,
      endTime: 0,
      endhour: 0,
      endminute: 0,
      endsecond: 0,
      starttime: 0,
      endtime: 0,
      todayimg: null,
      brandlist: [],
      loading: false,
      total: 0,
      mstlist:[],
      mstShow:true

    }
  },
  methods: {
    handleclick (index) {
    	this.$router.push(`/listing/${index}`)
      this.$router.push(`/clothing/${index}`)
    },
    handleCutdowntime (end) {
      var that = this
      var id = setInterval(function () {
				  var nowtime = new Date()
        var data = end - nowtime
        if (data === 0) {
          clearInterval(id)
        } else {
          that.endhour = parseInt(data / (60 * 60 * 1000) % 24, 10)
					    that.endhour = that.endhour < 10 ? ('0' + that.endhour) : that.endhour
          that.endminute = parseInt(data / (60 * 1000) % 60, 10)
					    that.endminute = that.endminute < 10 ? ('0' + that.endminute) : that.endminute
          that.endsecond = parseInt(data / 1000 % 60, 10)
					    that.endsecond = that.endsecond < 10 ? ('0' + that.endsecond) : that.endsecond
        }
      }, 1000)
    },
    loadMore () {
		  this.loading = true
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
		  axios({
		  	url: `vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E6%AF%8D%E5%A9%B4&app_name=shop_wap&app_version=4.0&mars_cid=1550025936042_eff3c20fab27592b534802331509bfd3&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20180926001&load_more_token=eyJjaGFubmVsX2lkIjoiNTMiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI2In0%3D&_=1550233874004`
		  }).then(res => {
        if(res){
          Indicator.close();
        }
            var array=[];
            var array_mst=[];
            var array_brand=[];
            array=res.data.data.data.floor_list;
            array_mst=array.filter(function(item){
              return item.floor_type==="mst";
            })
            if(array_mst.length===0){
              this.mstShow=false;

            }else{
              this.mstlist=array_mst;
            }
            array_brand=array.filter(function(item){
              return item.floor_type==="brand";
            })
            this.brandlist=[...this.brandlist,...array_brand];
            this.loading=false;
		  })
    }
  },

  mounted () {
    axios({
      url: `vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E6%AF%8D%E5%A9%B4&app_name=shop_wap&app_version=4.0&mars_cid=1550025936042_eff3c20fab27592b534802331509bfd3&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20180926001&_=1550059093710`

    }).then(res => {
     
      this.slidelist = res.data.data.data.floor_list[0].data.ad_data.ad_list

      this.clotheslistone = res.data.data.data.floor_list[1].data.operation_data.data.block[0].child
     
      this.clotheslisttwo = res.data.data.data.floor_list[2].data.operation_data.data.block[0].child
      this.clotheslistthree = res.data.data.data.floor_list[3].data.operation_data.data.block[0].child
      this.bannerlist = res.data.data.data.floor_list[4].data.resourceGroupList[0].resourceList
      this.bgimg = this.bannerlist[0].lightArtImage.imageUrl

      var start = 0
      var end = 0
      start = parseInt(res.data.data.data.floor_list[4].data.resourceGroupList[0].resourceList[20].lightArtCountDown.startTime)
      end = parseInt(res.data.data.data.floor_list[4].data.resourceGroupList[0].resourceList[20].lightArtCountDown.endTime)

			    this.$nextTick(() => {
			           this.handleCutdowntime(end)
			    })

      var time = new Date(start)
      this.startTime = time.getHours()

      this.$nextTick(() => {
        var swiper = new Swiper('.swiper-container', {
				     spaceBetween: 0,
				     centeredSlides: true,
				     loop: true,
				     autoplay: {
				       delay: 5000,
				       disableOnInteraction: false
				     },
				     pagination: {
				       el: '.swiper-pagination',
				       clickable: true
				     }
				   })
      })
      var bannerarray = res.data.data.data.floor_list[4].data.resourceGroupList[0].resourceList
    
       bannerarray = bannerarray.splice(1, 16);
     
      var result = []
      for (var i = 0; i < bannerarray.length; i += 4) {
      	result.push(bannerarray.slice(i, i + 4))
      }
      this.bannerlist = result

     
      this.todayimg = res.data.data.data.floor_list[5].data.image;
      axios({
        url: `vips-mobile/rest/layout/h5/channel/data?f=www&width=640&height=460&net=wifi&changeResolution=2&channel_name=%E6%AF%8D%E5%A9%B4&app_name=shop_wap&app_version=4.0&mars_cid=1550025936042_eff3c20fab27592b534802331509bfd3&warehouse=VIP_BJ&api_key=8cec5243ade04ed3a02c5972bcda0d3f&fdc_area_id=102101102&province_id=102101&city_id=102101101&saturn=&wap_consumer=A1&standby_id=www&source_app=yd_wap&mobile_platform=2&platform=2&client=wap&lightart_version=1&mobile_channel=mobiles-adp%3Auopxvvef%3A%3A%3A%3A%7C%7C&menu_code=20180926001&load_more_token=eyJjaGFubmVsX2lkIjoiNTMiLCJ0c2lmdCI6IjAiLCJicmFuZF9vZmZzZXQiOiIwIiwiYnJhbmRfcmVmZXJfaW5kZXgiOiI2In0%3D&_=1550233874004`
      }).then(res => {
        
      
      
        var array=[];
        var array_mst=[];
        var array_brand=[];
        array=res.data.data.data.floor_list;
  
        array_mst=array.filter(function(item){
          return item.floor_type==="mst";
        })
        if(array_mst.length===0){
          this.mstShow=false;

        }else{
          this.mstlist=array_mst;
        }
        
        array_brand=array.filter(function(item){
          return item.floor_type==="brand";
        })
    
        this.brandlist=array_brand;
      })

    })
  }

}

</script>

<style lang="scss">
*{
	margin:0;
	padding: 0;
}
  .swiper-container{
  	img{
  	height: 150px;

  	}
  }
  .options{
  	.option_item_one{
  		display: flex;
  		li{
  			flex:1;
  			list-style: none;
  			img{
  				width:75px;
  			}

  		}

  	}
  	.option_item_two{
  		display: flex;
  		li{
  			flex:1;
  			list-style: none;
  			img{
  				width:75px;
  			}

  		}

  	}
  	.option_item_three{

  		display: flex;
  		li{
  			flex:1;
  			list-style: none;
  			img{
  				width:187px;
  			}

  		}

  	}

  }
  .fast_capture{
    padding: 10px;
  	width:100%;
  	height:220px;
  	overflow: hidden;
  	background-size:100%;
    box-sizing: border-box;
  	.strat_end_time{
  		width:200px;
  		margin:0 auto;
  		font-size: 14px;
  		overflow: hidden;
  		margin-top: 50px;
  		margin-bottom: 10px;
  		.time_point{
  			float: left;
  			text-align:center;

  		}
  		.timeout{
  			float: left;
  			margin-left: 10px;
  			margin-top: 4px;
  			li{
  				width:20px;
  				height: 14px;
  				background: black;
  				color:white;
  				text-align: center;
  				line-height: 14px;
  				list-style: none;
  				float: left;
  				text-align:center;

  			}
  			li:nth-of-type(1){
  				width:40px;
  				text-align:center;
  				background: white;
  				color:black;

  			}
  			li:nth-of-type(3),li:nth-of-type(5){
  				width: 4px;
  				background: white;
  				color:black;
  			}

  		}

  	}
  	.banner{
      // width: 100%;
  		li{
  			width: 83px;
  			overflow: hidden;
  			margin-left:5px;
  			float: left;
  			.bannerimg{
  				margin-bottom: 5px;
  				img{
  					width: 83px;
  					height: 83px;

  				}

  			}
  			.fast-price-font{
  				float: left;
  				width: 36px;
  				height: 16px;
  				background: rgb(222, 61, 150);
  				font-size:8px;
  				color:white;
  				text-align: center;
  				line-height: 16px;

  			}
  			.fast-price{
  				float: left;
  				width: 40px;
  				height: 14px;
  				font-size: 12px;
  				color: rgb(34, 34, 34);

  			}
  			.fast-price-origin{
  				// margin-top: 10px;
  				clear: both;
  				color:rgb(152, 152, 159);
  				font-size: 12px;

  			}
  		}
  	}
  }
  .update-special-img{
  		height: 57px;
  	img{
  		width: 100%;
  	}
  }
  .type-mst{
    padding:0 5px 0 5px;
    background:#f0f0f0;
    li{
      img{
        width: 100%;
      }
    }
  }
    .sectionlist{
      box-sizing: border-box;
     	width: 100%;
  		padding:0 5px 0 5px;
  	  background:#f0f0f0;
      // overflow: hidden;
  		li{
  			margin-bottom: 10px;
        height: 233px;
        box-sizing: border-box;
  			.brandimg{
          height: 167px;
          // margin-bottom: 10px;
  				img{
  					width:100%;
  					height: 167px;
  				}
  			}
  			.brand-detail{
  				box-sizing: border-box;
  				padding:10px 0 10px 10px;
  				overflow: hidden;
  				width:100%;
  				height: 66px;
  				background: white;
  				border-radius: 0 0 5px 5px;
  				// border:;
  				.brand-description{
  					width:270px;
  					float: left;
  					font-weight: bold;
  					font-size:14px;

  				}
  				.over-time{
  					width:40px;
  					float: right;
  					font-size:12px;
  					color:rgb(152, 152, 159);

  				}
  				.discount{
  					clear:both;
  					font-size: 12px;
  					color:rgb(88, 92, 100);
  					margin-top: 5px;

  				}

  			}

  		}

  	}
  
</style>
