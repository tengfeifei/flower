module.exports = {
  devServer: {
	  // port:8000, //随便改端口号
	  proxy: {
	       '/vips-mobile': {
	           target: 'https://mapi.vip.com',
	           host: 'mapi.vip.com',
	           changeOrigin: true

	       },
	       '/server.html': {
	           target: 'https://m.vip.com',
	           host: 'm.vip.com',
	           changeOrigin: true,
	           headers: {
	           	'origin-referer': 'https://m.vip.com/nbnvzhuang.html?f=www&tra_from=tra%3Auopxvvef%3A%3A%3A%3A',
	           	'referer': 'https://m.vip.com/classify-list-130519-0-0-0-0-1-20.html'
	           }
	       }
	 }
  }
}
