<template>
	<div>
		<mt-header title="花花钱" class="top">
			<router-link to="/clothing/[object%20Object]" slot="left">
			 <mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<ul class="topbar">
				<router-link to="" tag="li" class="topbar-cell" @click.native="sortByPrice()" :style="isActive.a?'color:red':'color:black'">
					价格
				</router-link>		
				<router-link to="javascript:;" tag="li" class="topbar-cell" @click.native="sortByDiscount()" :style="isActive.b?'color:red':'color:black'">
					折扣
				</router-link>
				<router-link to="javascript:;" tag="li" class="topbar-cell" @click.native="" :style="isActive?'color:black':'color:red'">
					品牌
				</router-link>
				<router-link to="javascript:;" tag="li" class="topbar-cell" @click.native="" :style="isActive?'color:black':'color:red'">
					筛选
				</router-link>
		</ul>

		<ul class="product-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li v-for="data in products" @click="handleClick(data.productId)">
					<img :src="data.squareImage" alt="">
					<div class="describe-1">
						<span>疯抢价</span>
						<span>￥{{(data.vipshop_price*parseInt(data.vip_discount)*0.1).toFixed(0)}}</span>
						<span class="hui"><del>￥{{data.vipshop_price}}</del></span>
						<span class="hui">{{data.vip_discount}}</span>
					</div>
					<div class="describe-2">
						<span>{{data.brandShowName}} |</span>
						<span>
							{{data.productName}}						
						</span>
					</div>
				</li>
		</ul>
	</div>
</template>
<script>
import axios from 'axios'
import { Header } from 'mint-ui'
import Vue from 'vue'
import { InfiniteScroll } from 'mint-ui';

Vue.component(Header.name, Header)
Vue.use(InfiniteScroll);
export default {
	data () {
		return {

			loading:false,
			isActive:{a:false, b:false},
			doubleClick:false,
			products: [],
			detailist: ['潮人潮牌', 'aoo', 'app']
		}
	},
	methods: {
					handleClick (index) {
							this.$router.push(`/detail/${index}`)
					},				
					loadMore () {
					  axios.post('server.html?rpc&method=ClassifyRpc.getCategoryProductInfo&f=www&_=1550144263039',{"method":"ClassifyRpc.getCategoryProductInfo","params":{"productIds":"575104186188572,575112414700316,571725431202012,575104166699804,570575752544598,569259431461651,561877113779166,538524029105671,590605132960854,590605023208534,684951497,558766516807560,590605133030486,570553862271945,590605005493334,590605133235286,590605132096598,590604967793750,590605077206102,590605058831446","page":"classify-list-130519-0-0-0-0-1-20.html","query":""},"id":1550135347318,"jsonrpc":"2.0"}).then(res => {
					  		this.products = [...this.products, ...res.data["0"].result.data.products];
					  		console.log(this.products.length);
					  	})
					},
					sortByPrice() {
						console.log(this.products.length);
						this.products.sort((a, b)=>{
							if(this.doubleClick){
								console.log('doubleClick1=====', this.doubleClick);
								this.doubleClick = !this.doubleClick;
								return (a.vipshop_price*parseInt(a.vip_discount)*0.1).toFixed(0)-
									(b.vipshop_price*parseInt(b.vip_discount)*0.1).toFixed(0);								
							}
							else{
								console.log('doubleClick2=====', this.doubleClick);
								this.doubleClick = !this.doubleClick;
								return (b.vipshop_price*parseInt(b.vip_discount)*0.1).toFixed(0)-
								(a.vipshop_price*parseInt(a.vip_discount)*0.1).toFixed(0);
							}
							
						});
						this.isActive.a = true;
						this.isActive.b = false;

					},
					sortByDiscount() {
						this.isActive.b = true;
						this.isActive.a = false;
					}
	},
	mounted () {
		axios.post('server.html?rpc&method=ClassifyRpc.getCategoryProductInfo&f=www&_=1550144263039',{"method":"ClassifyRpc.getCategoryProductInfo","params":{"productIds":"575104186188572,575112414700316,571725431202012,575104166699804,570575752544598,569259431461651,561877113779166,538524029105671,590605132960854,590605023208534,684951497,558766516807560,590605133030486,570553862271945,590605005493334,590605133235286,590605132096598,590604967793750,590605077206102,590605058831446","page":"classify-list-130519-0-0-0-0-1-20.html","query":""},"id":1550135347318,"jsonrpc":"2.0"}).then(res => {
				console.log("ok");
				console.log(res);
				console.log(res.data);
				console.log(res.data["0"].result.data.products);
				this.products = res.data["0"].result.data.products;
				console.log('ccccc', this.products);
				console.log('ccccc', this.products);
			})
	}
}
</script>
<style lang="scss">
	*{
		margin:0;
		padding:0;
	}
	ul{
		list-style:none;
	}
	router-link{
		text-decoration:none !important;
	}
	.top{
		width:100%;
	
		background-color: red;
		font-size:120px;
	}
	.mint-header.top{
		background-color:white;
		height:49px;
		color:black;
		font-size:16px;
		border-bottom:1px #e5e5e5 solid;
	}
	.topbar{
		width:100%;
		height:39px;
		display:flex;
		border-bottom:1px solid #e5e5e5;
	}
	.topbar li{
		flex:1;
		text-align:center;
		line-height:39px;
	}
	.topbar li:nth-of-type(3){
		border-right:1px solid #e5e5e5;
	}
	.topbar-cell{
		text-decoration:none;
		color:black;
	}
	.product-list{
		display:flex;
		flex-wrap:wrap;
	}
	.product-list li{
		width:47%;
		background-color:-pink;
		margin:5px auto;
	}
	.product-list li img{
		display:block;
		width:100%;
	}
	.product-list .describe-1{
		width:100%;
		margin:5px 2px 0;
	}
	.product-list .describe-2{
		width:100%;
		font-size: 14px;
		color:#585c64;
		margin:3px 2px 5px;


  	display: -webkit-box;
	  -webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.product-list .hui{
		font-size:12px;
		color:#98989f;
		margin:0 2px;
	}

	.active{
		border-bottom:5px solid #f60;
	}

</style>
