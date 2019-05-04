import {classicBehavior} from '../classic-beh.js'

const  mMgr=wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBehavior],
  properties: {
   src:String,
   title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png',
    playing:false
  },
  attached(event){
    this._recoverPlaying()
    this._monitorSwitch()
  },
detched(event){},
  /**
   * 组件的方法列表
   */
  methods: {
       onPlay(event){
         //this.data.playing="false"
         if(!this.data.playing){
          this.setData({
            playing:true
           })
          mMgr.title = this.properties.title
          mMgr.src=this.properties.src
         }else{
          this.setData(
           {  playing:false}
          
          )
          mMgr.pause()
         }
         
       },
       _recoverPlaying: function() {
        if (mMgr.paused) {
          this.setData({
            playing: false
          })
          return
        }
        if (mMgr.src == this.properties.src) {
          
            this.setData({
              playing: true
            })
          
        }
      },
      _monitorSwitch(){
        mMgr.onPlay(()=>{
          this._recoverPlaying()
        })
        mMgr.onPause(()=>{
          this._recoverPlaying()
        })
        mMgr.onStop(()=>{
          this._recoverPlaying()
        })
        mMgr.onEnded(()=>{
          this._recoverPlaying()
        })

      }
  }
})
