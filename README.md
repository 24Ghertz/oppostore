# <p align="center">oppostore</p>
<p align="center">建议各位本地运行,脚本在res/task里</P>
<p align="center">喜欢这个项目？可以在右上角给颗⭐！你的支持是我最大的动力😎！</P>

## 免责声明
- 本仓库发布的oppo商城项目中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断.

- 所有使用者在使用oppo商城项目的任何部分时，需先遵守法律法规。对于一切使用不当所造成的后果，需自行承担.对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害.

- 如果任何单位或个人认为该项目可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关文件.

- 任何以任何方式查看此项目的人或直接或间接使用该oppo商城项目的任何脚本的使用者都应仔细阅读此声明。本人保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或oppo商城项目的规则，则视为您已接受此免责声明.

您必须在下载后的24小时内从计算机或手机中完全删除以上内容.

> 您使用或者复制了本仓库且本人制作的任何脚本，则视为`已接受`此声明，请仔细阅读

## 环境

Autojs 9.0.11
支持正版软件

## 已实现功能
* [x] 每日签到
* [x] 每日浏览商品任务
* [x] 每日分享商品任务
* [x] 赚积分活动
* [x] 天天积分翻倍
* [x] 天天领现金任务列表
* [x] 天天领现金定时红包
* [x] 积分乱斗(realme)
* [x] 积分大乱斗(HeyTap)
* [x] opppo社区视频
* [x] 一加加油站
* [x] 全家桶签到
* [x] 现金助力




## 文件说明
*详见 项目res/task/
由于COOKIE里会包含很多引号，我们需要把最外面的双引号 " 改为单引号 '  
如何不用重复在每个脚本里添加数据呢，autojs给我们的方法是有很多，我例举两个：
1.  在项目里任何其中一个脚本中，创建一个本地数据库： var storage = storages.create("自定义名字");设ua和ck的值：var ua="";var ck = ""; 储存数据：storage.put("CK",ck)；storage.put("UA",ua);在每一个脚本的开头都设置这个变量，即输入var storage = storages.create("自定义名字")；然后取出保存的数据： var COOKIE=storage.get("CK"); var UA=storage.get("UA")
2.  本地写入一个json文件,注意json格式, 方法 JSON.parse



#### 更新日志
<details>
<summary> </summary>
 
> 证明该项目仍然存活

2021-11-25

</details>
