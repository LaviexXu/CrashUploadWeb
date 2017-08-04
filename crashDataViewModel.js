/**
 * Created by Carlos on 04/08/2017.
 */
function crashDataViewModel() {
    var self=this;
    self.crashList=ko.observableArray([
       new  crashItem("#1","java.lang.NullPointerException","","1.1.6",23,
           "2016-04-29\n09:20","2017-03-14\n16:30",14,false),
        new  crashItem("#2","java.lang.NullPointerException","","1.2.1",32,
            "2016-09-20\n14:20","2017-08-01\n15:30",14,false),
    ]);
}

function crashItem(id, crashInfo, crashStack, crashVersion, crashNumber,
                   crashTime, lastCrash, affectedDeviceNum, isFixed) {
    this.id = id;
    this.crashInfo = crashInfo;
    this.crashStack = crashStack;
    this.crashVersion = crashVersion;
    this.crashNumber = crashNumber;
    this.crashTime=crashTime;
    this.lastCrash=lastCrash;
    this.affectedDeviceNum=affectedDeviceNum;
    this.isFixed=isFixed;
}