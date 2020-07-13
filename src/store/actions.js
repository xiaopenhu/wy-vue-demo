// Actions  中的方法有两个默认参数
// context  上下文(相当于箭头函数中的this)对象
// payload  挂载参数
// 下列两方法效果相同，第二个方使用Promise封装，更推荐
const actions = {
  aEditName (context, payload) {
    setTimeout(() => {
      context.commit('editName', payload)
    }, 2000)
  },
  aEditAge (context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('editAge', payload)
        resolve()
      }, 2000)
    })
  }
}
export default actions
