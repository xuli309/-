##### 全局安装vue脚手架

npm install -g @vue/cli

npm install -g @vue/cli-service-global

##### 创建vue项目

vue create 项目名  

vue ui

vue init webpack 项目名

##### 启动vue

npm run serve

##### 安装

npm install -g @vue/cli-init

npm install axios mint-ui -S

##### 安装时间控件momentjs

npm install moment -S


##### 前端UI库使用

###### pc端 
Element https://element.eleme.cn/#/zh-CN/component/quickstart
mint-ui https://github.com/ElemeFE/mint-ui
vux     https://github.com/airyland/vux
ivue    https://www.iviewui.com/docs/guide/install

###### 手机端 
cube-ui https://didi.github.io/cube-ui/#/zh-CN/docs/create-api


##### 

##### vue : 无法加载文件 C:\Users\XY\AppData\Roaming\npm\vue.ps1，因为在此系统上禁止运行脚本。
Windows PowerShell
版权所有 (C) Microsoft Corporation。保留所有权利。
PS C:\WINDOWS\system32> set-ExecutionPolicy RemoteSigned
执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”): y
PS C:\WINDOWS\system32>


##### 添加购物车的方法
1. 第一种方法
#父组件Goods.vue中
<Cart ref="cart"></Cart>
addCart(good){
    this.$refs.cart.addCart(good)
}

2.第二种方法
main.js 中增加总线机制  适合小项目，项目大的话用VueX
Vue.prototype.$bus = new Vue();
#父组件Goods.vue中this.$bus.$emit派发
addCart(good){
    this.$bus.$emit("addCart",good);
}
#子组件Cart.vue中this.$bus.$on接收并执行
 created () {
    this.$bus.$on('addCart',good=>this.addCart(good));
 }

 3.第三种方法，子组件--->父组件通信
 #子组件Cart.vue
 this.$emit('addCart');
 #父组件Goods.vue
 <Cart @addCart="onAddCart"></Cart>
 onAddCart(){
    console.log('aaa');
}
