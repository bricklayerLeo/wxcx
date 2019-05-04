import {config} from '../config.js'





 class HTTP{
  request(params){
    if(!params.method){
      params.method="GET"
    }
    wx.request({
      url: config.api_base_url + params.url, 
      data: params.data, 
      method: params.method,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:res=>{
          let code = res.statusCode.toString()
          if(code.startsWith('2')){
             params.success && params.success(res.data)
          }else{
            wx.showToast({
              title:'错误',
              icon:'none',
              duration:'1500'
            })
          }
      },
      fail:err=>{
        wx.showToast({
          title:'错误',
          icon:'none',
          duration:'1500'
        })
      }
    });

  }

 
}

export {HTTP}

//封装数据请求