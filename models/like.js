import {HTTP} from '../utils/http.js'
let http = new HTTP()

class LikeModel {
    like(behavior,artID,category){
        let url = behavior =='like'?'like':'like/cancel'
        http.request({
            url:url,
            method:'POST',
            data:{
                art_id:artID,
                type:category
            }
        })
    }
 //   getLatest(sCallback){
 //       http.request({
 //           url:'classic/latest',
 //           success:res=>{
 //               console.log(res)
 //             sCallback(res)
 //           }
 //        })
 //   }
 getClassicLikeStatus(artID, category, sCallback) {
    var params = {
      url: 'classic/' + category + '/' + artID + '/favor',
      success: sCallback
    }
    http.request(params)
  }
}

export {LikeModel}