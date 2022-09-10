// pages/newsList/newsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBars:[
      {id:1,name:"动态"},
      {id:2,name:"学习"},
      {id:3,name:"我的"},
    ] , 
    selectTypeIndex:1 , 
  
    RecentThing:[

    ]
  },
  selectBar(event){
      var value = event.currentTarget.dataset 
      console.log(value)
      console.log(value.id)
      this.setData({
        selectTypeIndex:value.id
      })
  } , 
  
  getRecentThing(){ 
    var that=this
    wx.request({
        url: 'http://localhost:54861/api/RecentThing',
        success(res){
        that.setData({RecentThing:res.data})
        // console.log(res)
        // console.log(that.data.RecentThing)
  }
})
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getRecentThing() ;
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