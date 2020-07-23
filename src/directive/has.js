import Vue from 'vue'

/** 权限指令**/
const has = Vue.directive('has', {
  inserted: function (el, binding, vnode) {
    // 获取页面按钮权限
    const btnPermissionsArr = vnode.context.$route.meta.btnPermissions
    console.log('vnode.context.$route.meta.btnPermissions', btnPermissionsArr)
    if (!Vue.prototype.$_has(btnPermissionsArr)) {
      console.log(el.parentNode)
      el.parentNode.removeChild(el)
    }
  }
})
// 权限检查方法
Vue.prototype.$_has = function (value) {
  let isExist = false
  // 获取用户按钮权限
  // let btnPermissionsStr = sessionStorage.getItem("btnPermissions");
  const btnPermissionsStr = 'normal'
  if (btnPermissionsStr === undefined || btnPermissionsStr == null) {
    return false
  }
  if (value.indexOf(btnPermissionsStr) > -1) {
    isExist = true
  }
  return isExist
}
export default has
