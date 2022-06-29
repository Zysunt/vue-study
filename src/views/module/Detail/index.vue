<template>
  <div class="detail">
    <div>
      <a class="goback" @click="goBack()">返回</a>
      <div>
        <img :src="item.product_img_url" /> 
        
      </div>
      <div>
        <p>{{item.product_name}}</p>
        <p>{{item.product_detail}}</p>
      </div>
    </div>
    <div class="shoppCart" >
        <button @click="addToCart()">加入购物车</button>
    </div>
  </div>
</template>

<script>
import {getDetail} from '@/request/request'

export default {
  data(){
    return {
      item:{}
    }
  },
  methods:{
    getData(id=1){
       getDetail({mId:id}).then(res=>{
         this.item = res.data[1][0];
       })
    },
    goBack(){
      this.$router.push('/home');
    },
    addToCart(){
      // 每次添加商品时，需要添加商品数量
      this.$set(this.item,'count',1)// 需要用set去操作对象让页面监测到渲染
      this.$store.dispatch('CARTADD',this.item);
      this.$router.push('/order');
    }
  },
  mounted(){
    this.getData(this.$route.params.id);
    this.$store.dispatch('HIDENAV');// 隐藏底部导航
  },
  destroyed(){
    this.$store.dispatch('SHOWNAV');// 显示底部导航
  }
}
</script>