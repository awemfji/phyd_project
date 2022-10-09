## 项目是前后端分离的

### 前端是用vuecli创建的服务 启动方式npm run serve
### 后端是使用nodejs+mongodb  启动方式nodemon .\app.js

### 实现啦用户登录，用户注册，获取用户信息 

### 用户关注没实现
思路：每一个用户都有两个数组 一个是关注数组 一个是粉丝数组
    通过一个列表页实现用户的关注  获取所有用户(不包含自己),这些用户相对于自己有三种状态 已关注 未关注 粉丝
    你可以点击关注用户 然后获取用户id将用户保存到自己的关注数组里 将自己的用户id添加到自己关注的人的粉丝数组里

### 数据库表结构
const UserType = {
    username: String,
    password: String,
    name: String,  //昵称
    age: Number,
    sex: String,
    guanzhu: Number,  //关注数
    fensi: Number,   //粉丝数
    focus: Array,   // 关注数组
    fans: Array,   //粉丝数组 
    phone: String,
    create_time: { type: Number, default: Date.now },
}