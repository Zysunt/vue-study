<template>
  <div class="order">
    <ul>
      <li v-for="(item, index) in cartData" :key="index">
       <div class="flex">
        <div class="shoppCart-list-l">
          <input type="checkbox" />
          <img :src="item.product_img_url" alt=""/>
        </div>
        <div class="shoppCart-list-r">
          <p>{{item.product_name}}</p>
          <div class="flex">
            <div>
              <span class="price-text">原价{{item.product_price}}</span> 
              <span class="red"> {{item.product_uprice}}</span>
            </div>
          <label>
            <button @click="countChange(item,'-')">-</button>{{item.count}}<button @click="countChange(item,'+')">+</button>
          </label>
          </div>
          
        </div>
        </div>
      </li>
    </ul>
     <div class="shoppCart-total">
          <div class="flex">
            <div><input type="checkbox" />全选</div>
            <label>
              <span>合计：</span>
              <b class="red">{{totalMoney(100)}}</b>
              <button class="btn">结算</button>
            </label>
          </div>
      </div>
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
  computed:mapGetters(['cartData','totalMoney']),
  methods:{
    // ...mapActions(['ADD','SHOWNAV']),
    add(){
      // this.$store.dispatch('ADD');
    },
    countChange(item,type){
      switch(type){
        case '+':
              item.count+=1;
              break;
        case '-':
              item.count-=1;
              break;
        default:
            return
      }
    }

  },
}
</script>
<style scoped>
.flex{
  display:flex;
  justify-content: space-between;
  margin:5%;
}
.shoppCart-list-l{
  display:flex;
}
.shoppCart-list-l img{
    height:4rem;
    width:4rem
  }
.red{
  color: red;
}
.price-text{
 text-decoration:line-through
}
.order{
  position:relative;
  height: 100vh;
}
.shoppCart-total{
  position: absolute;
  bottom: 4rem;
  width:100%;
}
</style>

