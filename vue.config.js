module.exports = {
  devServer: {
	  // port:8000, //随便改端口号
	  proxy: {
	       '/vips-mobile': {
	           target: 'https://mapi.vip.com',
	           host: 'mapi.vip.com',
	           changeOrigin: true

	       }
	 }
  }
}
