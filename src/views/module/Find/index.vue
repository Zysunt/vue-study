<template>
  <div class="about">
    <h1>find</h1>
    <h1>{{$store.state.num}}</h1>
    <button @click="add()">添加（mapActions）</button>
    <button @click="ADD">添加的第二种方式</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      item:{}
    }
  },
  // computed:mapGetters(['']),
  methods:{
    ...mapActions(['ADD','SHOWNAV']),
    add(){
      this.$store.dispatch('ADD');
    },

  },
}
</script>