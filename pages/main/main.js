// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "Simon",
        todos: ['Eat', 'Sleep', 'Learning'],
        val: "",
        src: ""
    },

    //   迷你清单
    handleInput(e) {
        console.log(e)
        this.setData({
            val: e.detail.value,
        })
    },
    addTodo() {
        this.setData({
            val: '',
            todos: [...this.data.todos, this.data.val]
        })
    },


    // 截图
    takePhoto() {
        // 摄像头上下文
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: res => {
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },



    /* 体验弹窗 */
    toast() {
        wx.showToast({
            title: '成功信息',
            icon: 'success',
            // 持续时间
            duration: 3000
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
