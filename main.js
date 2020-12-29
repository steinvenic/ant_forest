requestScreenCapture();
console.show()
//必须加点延时否则setPosition可能会失效
sleep(100)
console.setPosition(0, device.height * 0.5);


//封装的适配屏幕大小的点击方法（自带的setScreenMetrics方法无效）
function m_click(x,y){
    click((x/1080)*device.width,(y/2340)*device.height)
}

//收取能量
function doCilck(times,delay){
    for(var i=0;i<times;i++){
        m_click(224,752)
        sleep(delay)
    
        m_click(351,675)
        sleep(delay)
    
        m_click(487,624)
        sleep(delay)
        
        m_click(600,620)
        sleep(delay)
    
        m_click(742,667)
        sleep(delay)
        
        m_click(869,770)
        sleep(delay)
    }

}

//点击某个点多次
function click_many_times(x,y,times,delay){
    for(var i=0;i<times;i++){
        m_click(x,y)
        sleep(delay)
    }
}
console.info("打开蚂蚁森林界面...")
//scheme打开蚂蚁森林
app.startActivity({
    action: "android.intent.action.VIEW",
    data: "alipays://platformapi/startapp?appId=60000002",
    packageName: "com.eg.android.AlipayGphone"
});
sleep(6000)
//进入个人森林后，先点击空白区域，用于关闭某些时不时跳出来的小弹窗
click_many_times(500,430,3,50)

while (true){
    if(images.pixel(captureScreen(), 729,1616)!=-5963985){
        console.info('收取中' )
        sleep(1500)
        doCilck(2,5)
        console.info('切换下一个好友...' )
        sleep(800)
        //切换到下一个用户的森林界面
        m_click(884,1592)
        sleep(1500)
    }else{
        console.warn('收取完成，程序退出' )
        exit()
    }
}





