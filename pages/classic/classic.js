import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'

let classic = new  ClassicModel()
let likemodel = new LikeModel()


// pages/classic/classic.js
Page({

 
  data: {

   classicData:null,
   latest:true,
   first:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classic.getLatest(res=>{
    
      this.setData({
      
      classicData:res
       
     })
   
    })
   
  },

  onLike(event){
    console.log(event)
     let  behavior = event.detail.behavior
     
     likemodel.like(behavior,this.data.classicData.id,this.data.classicData.type)
   },
 
   onNext(event){
    let index = this.data.classicData.index
    classic.getNext(index,(res)=>{
   
        this.setData({
          classicData:res,
          latest:classic.isLatest(res.index),
          first:classic.isFirst(res.index)
        })
       // console.log(res)
    })
   },
 
   onPrevious(event){
     let index = this.data.classicData.index
       classic.getPrevious(index,(res)=>{
         
           this.setData({
             classicData:res,
             latest:classic.isLatest(res.index),
             first:classic.isFirst(res.index)
           })
          // console.log(res)
       })
   },   
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})