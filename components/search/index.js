// components/search/index.js

import {KeywordModel}  from '../../models/keyword.js'

const keywordModel = new KeywordModel()

import {BookModel}  from '../../models/book.js'
const bookModel = new BookModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    hotWords:[],
    dataArray:[],
    searching:false,
    q:''
  },
   
  attached(){
    const historyWords = keywordModel.getHistory()
    this.setData({
      historyWords
    })
    keywordModel.getHot().then(data=>{
          this.setData({
             hotWords:data.hot
          })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
  onCancel(event){
    this.triggerEvent('cancel',{},{})
 
  },

  onDelete(event){
  this.setData({
    searching:false
  })
},

  onConfirm(event){
 
this.setData({
searching:true  
})
  const q = event.detail.value || event.detail.text


  bookModel.search(0,q)
  .then(res=>{
   this.setData({
     dataArray:res.books,
     q
   })
   keywordModel.addToHistory(q)
  })
  }
  }
})
