/**
 * Created by Carlos on 04/08/2017.
 */
function crashDataViewModel() {
    var self = this;
    self.crashList = ko.observableArray([
        new crashItem("#1", "java.lang.NullPointerException", "1.1.6", 23,
            "2016-04-29\n09:20", "2017-03-14\n16:30", 14, false),
        new crashItem("#2", "java.lang.NullPointerException", "1.2.1", 32,
            "2016-09-20\n14:20", "2017-08-01\n15:30", 14, false),
    ]);
    self.crashDetail = ko.observableArray();

    self.getCrashDetails = function (crash) {
        //根据id请求错误堆栈信息 出错机型系统统计


        $(".look-into-details")[0].style.display = "block";
        $(".detail-table")[0].style.display = "none";
        console.log(crash);
        $("#crash-app-version").text(crash.crashVersion);
        $("#crash-count").text(crash.crashNumber);
        $("#device-count").text(crash.affectedDeviceNum);
        $("#crash-id").text(crash.id);
        $("#crash-info").text(crash.crashInfo);
        $("#issue-stack").text("java.lang.RuntimeException: Unable to start activity ComponentInfo{im.fir.android/im.fir.android.activity.AppActivity}: java.lang.NullPointerException: Attempt to read from field 'java.lang.String im.fir.android.module.File.type' on a null object reference\n" +
            "\tat android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2298)\n" +
            "\tat android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:2360)\n" +
            "\tat android.app.ActivityThread.access$800(ActivityThread.java:144)\n" +
            "\tat android.app.ActivityThread$H.handleMessage(ActivityThread.java:1278)\n" +
            "\tat android.os.Handler.dispatchMessage(Handler.java:102)\n" +
            "\tat android.os.Looper.loop(Looper.java:135)\n" +
            "\tat android.app.ActivityThread.main(ActivityThread.java:5221)\n" +
            "\tat java.lang.reflect.Method.invoke(Native Method)\n" +
            "\tat java.lang.reflect.Method.invoke(Method.java:372)");

        //set pie charts with server data
        //deviceDistributionChart.series[0].setData();
        //systemDistributionChart.series[0].setData();
        self.crashDetail.removeAll();
        self.crashDetail.push(new crashDetailItem("5.1.1","samsung","Note7","0.8M","13.2G","3G","是","00:02\n2017/2/11"));
        self.crashDetail.push(new crashDetailItem("6.0.0","xiaomi","mi6","201M","2.2G","wifi","否","09:45\n2016/12/18"));
        $(".issue-info")[0].style.display = "block";
    };
    self.issueInfoDisappear = function () {
        $(".issue-info")[0].style.display = "none";
    };
    self.lookIntoDetails = function () {

        $(".look-into-details")[0].style.display = "none";
        $(".detail-table")[0].style.display = "block"
    }

}

function crashItem(id, crashInfo, crashVersion, crashNumber,
                   crashTime, lastCrash, affectedDeviceNum, isFixed) {
    this.id = id;
    this.crashInfo = crashInfo;
    this.crashVersion = crashVersion;
    this.crashNumber = crashNumber;
    this.crashTime = crashTime;
    this.lastCrash = lastCrash;
    this.affectedDeviceNum = affectedDeviceNum;
    this.isFixed = isFixed;
}

function crashDetailItem(systemVersion,phoneBrand, deviceModel, memoryRemain, storageRemain,
                         netType, rooted, occurTime) {
    this.systemVersion=systemVersion;
    this.phoneBrand = phoneBrand;
    this.deviceModel = deviceModel;
    this.memoryRemain = memoryRemain;
    this.storageRemain = storageRemain;
    this.netType = netType;
    this.rooted=rooted;
    this.occurTime=occurTime;
}


