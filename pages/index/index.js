// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['湖南省', '长沙市', '岳麓区'],
    now:{
      tmp:0,
      cond_txt:'未知',
      cond_code:'999',
      hum:0,
      pres:0,
      vis:0,
      wind_dir:0,
      wind_spd:0,
      wind_sc:0
    }
  },
  /**
   * 更新省市区信息
   */
  regionChange: function(e) {
    this.setData({region: e.detail.value});
    this.getWeather();//更新天气
  },
  /**
   * 获取实况天气数据
   */
  getWeather: function () {
    var that = this;//this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',
      data:{
        location:that.data.region[1],
        key:'4b2fe7796a00422f99126effb58a4ced'
      },
      success:function(res){
        //console.log(res.data);
        that.setData({now:res.data.HeWeather6[0].now});
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWeather();//更新天气
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})