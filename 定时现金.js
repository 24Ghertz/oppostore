// 获取当前脚本的路径
let path = engines.myEngine().source.toString();
// 获取当前时间后10分钟的时间戳
let millis = new Date().getTime() + 10 * 60 * 1000;
// 预定一个10分钟后的任务，这样10分钟后会再次执行本脚本，并再次预定定时任务，从而每10分钟循环
var task = timers.addDisposableTask({
    path: path,
    date: millis,
});


var storage = storages.create("OPPO商城小铺");


var UA = 
var COOKIE=

    
    

var headers = {
    "Host": "store.oppo.com",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": UA,
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://hd.oppo.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://store.oppo.com/cn/app/cashRedEnvelope?activityId=1&us=qiandao&um=task",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": COOKIE,

};


    
if(COOKIE!=null){  
main()
}else{
 删除任务("cashplace");  
}

function main() {
    

    ret = http.get("https://store.oppo.com/cn/oapi/omp-web/web/dailyCash/queryActivityReward?activityId=1", {
        headers: headers,
    }).body.json();
    if (ret['code'] == 200) {
        sleep(1500);
        if (ret['data']['timingRewardList'][0]['hasDraw'] == false) {
            getcash(ret['data']['timingRewardList'][0]['id']);
        }
        sleep(1500);
        for (var i = 0; i < ret['data']['timingRewardList'].length; i++) {
            if (ret['data']['timingRewardList'][i]['hasDraw'] == true && ret['data']['timingRewardList'][i + 1]['hasDraw'] == false) {
                getcash(ret['data']['timingRewardList'][i + 1]['id']);
            }
        }
 
    }else if(ret['code']==1000001){
        award();
    }else{
        删除任务("cashplace");
    }



}


function getcash(z) {

    sleep(2000);

    mm = http.post("https://store.oppo.com/cn/oapi/omp-web/web/dailyCash/drawReward", {
        "channel": "1",
        "channelRewardId": z,
        "activityId": "1"
    }, {
        headers: headers,
    }).body.json();
    if (mm['code'] == 200) {
      toast( "第" + z + "次领取现金:" + mm['data']['amount']);
    }

}

function 删除任务(A) {

    let jsPath = storage.get(A);

    // 按脚本路径查找定时任务
    let tasks = $timers.queryTimedTasks({
        path: jsPath
    });

    // 删除查找到的所有定时任务
    tasks.forEach(t => {
        log("删除现金后台",$timers.removeTimedTask(t.id));
    });

}


function award() {


    retaa = http.request("https://store.oppo.com/cn/oapi/omp-web/web/dailyCash/drawReward", {
        method: "POST",
        contentType: "application/x-www-form-urlencoded",
        body: "activityId=1&channelRewardId=0&channel=0",
        headers:headers,
    }).body.json();
    if (retaa['code'] == 200) {
        log("初始现金:" + retaa['data']['amount']);

    }

}
