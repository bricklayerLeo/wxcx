// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
          like:{
            type:Boolean
          },
          count:{
            type:Number,
            
          }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
     yesScr:'images/like.png',
     noSrc:'images/like2.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLike(){
        let like = this.properties.like
        let count = this.properties.count
        
        count = like?count-1:count+1
        this.setData({
          
          count,
          like:!like
        })
        //自定义事件
     let behavior = this.properties.like?'like':'cancel'
     //激活自定义事件,三个参数 第一个自定义事件的名字，自己取，第二个参数，事件的属性
     this.triggerEvent('like',{
          behavior:behavior
          //这个参数直接反应到 event的detail里面
     },{})
      }
  }
})
