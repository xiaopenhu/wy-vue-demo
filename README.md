state 存放状态
mutations state成员操作
getters 加工state成员给外界
actions 异步操作
modules 模块化状态管理

首先，Vue组件如果调用某个VueX的方法过程中需要向后端请求时或者说出现异步操作时，需要dispatch VueX中actions的方法，以保证数据的同步。可以说，action的存在就是为了让mutations中的方法能在异步操作中起作用。

mutations是操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。


mutations方法都有默认的形参：

([state] [,payload])

state是当前VueX对象中的state
payload是该方法在被调用时传递参数使用的

https://www.jianshu.com/p/2e5973fe1223
https://juejin.im/post/58fffc52a22b9d0065b8db53
