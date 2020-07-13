// Getters  中的方法有两个参数
// state    当前VueX对象中的状态对象
// getters  可将当前getters下的其他getter拿来用
const getters = {
  nameInfo (state) {
    return '姓名:' + state.name
  },
  fullInfo (state, getters) {
    return getters.nameInfo + '年龄:' + state.age
  }
}
export default getters
