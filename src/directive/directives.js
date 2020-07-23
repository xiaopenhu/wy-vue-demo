// 将自定义指令对象，在main.js全局注册
import has from './has'

const directives = {
  has
}
// 这种写法可以批量注册指令
export default {
  install (Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
