// pages/vedio/vedio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vedioList:[

    ] , 
    userInfo:{} , 
    hasUserInfo:false , 
    canIUse:wx.canIUse('button.open-type.getUserInfo') , 
    canIUseGetUserProfile:false , 
    canIUseOpenData:wx.canIUse('open-data.type.userAvatarUrl')&&wx.canIUse('open-data.type.userNickName')
  },
  vedioOnclick(event){
    var that = this
    var inUrl = event.currentTarget.dataset.text
    console.log(inUrl)
    console.log(that.data.userInfo)
    setTimeout(function(){
      wx.request({
        url:'http://localhost:54861/api/RecentThing' , 
        data: {
          inUrl:inUrl , 
          userNickName:that.data.userInfo , 
      },
      method: 'POST',
      header: {
            'content-type': 'application/x-www-form-urlencoded'
      } , 
        success(res){
          console.log(res)
        }
      })
      console.log("播放视频了呜呜呜")
    },3000)
  } , 
  
  

  getVedioList(){
    var that = this
    wx.request({
      url: 'http://localhost:54861/api/Vedio',
      success(res){
        that.setData({vedioList:res.data})
        // console.log(that.data.vedioList)
      }
    })
  } , 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getVedioList() 
   
   wx.getUserProfile({
    desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success:  (res) => {
      console.log(res)
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true 
      })
      console.log(userInfo) 
    }
  })

   if(wx.getUserProfile){
     this.setData({
       canIUseGetUserProfile:true 
     })
   }

   var that = this
   wx.getUserInfo({
     success(res) {
       console.log(JSON.parse(res.rawData).nickName)
       that.setData({
        userInfo:JSON.parse(res.rawData).nickName
       })
       console.log(that.data.userInfo)
     }
   })

  },
  onGotUserInfo: function (e) {
    console.log("nickname=" + e.detail.userInfo.nickName);
   } , 

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true 
        })
        console.log(userInfo) 
      }
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