<template>
    <div class="nav-bottom">
      <router-link to="/home">
          <i class="iconfont iconiconfontzhizuobiaozhun023101"></i>
          <label>首页</label>
      </router-link>
      <router-link to="/find">
          <i class="iconfont iconfaxian1"></i>
          <label>发现</label>
      </router-link>
      <router-link to="/order">
          <i class="iconfont icondingdan"></i>
          <i v-if="totalNum>0">{{totalNum}}</i>
          <label>购物车</label>
      </router-link>
      <router-link to="/my">
          <i class="iconfont iconwo1"></i>
          <label>我的</label>
      </router-link>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      msg:{}
    }
  },
  computed:mapGetters(['totalNum']),
  methods:{
  },
}
</script>
<style scoped>
    .active {
        color:red;
    }
</style>
