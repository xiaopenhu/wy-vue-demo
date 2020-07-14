export default {
  data () {
    return {
      city: '杭州'
    }
  },
  methods: {
    showCity () {
      console.log(this.city)
    }
  },
  mounted () {
    console.log('mixin mounted', this.city)
  }
}
