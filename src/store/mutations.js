// mutations中的方法有两个参数
// state是当前VueX对象中的state
// obj是该方法在被调用时传递参数使用的
// 没有参数 this.$store.commit('edit')
// 单个参数 this.$store.commit('edit',15)
// 多个参数 this.$store.commit('edit',{age:15,sex:'男'})
const mutations = {
  editName (state) {
    state.name = 'jack'
  },
  editAge (state, obj) {
    state.age = state.age + obj.a + obj.b
  }
}
export default mutations
