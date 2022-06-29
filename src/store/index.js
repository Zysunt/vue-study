import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  num:20,
  isNavShow:true, //底部导航显示与隐藏
  cartAddData:[], //购物车数据
}
var getters={
  getNavState(state){  //获取底部导航状态的值
    return state.isNavShow
  },
  cartData(state){
    return state.cartAddData// 购物车数据
  },
  totalNum(state){
    return state.cartAddData.reduce((total,now)=>total+now.count,0)// 购物车总数
  },
   //  (state, getters)或者也可以通过getter返回一个函数，来实现getter传参,price为单价
  totalMoney: (state) => (price) => {
    return state.cartAddData.reduce((total,now)=>total+now.count*price,0)// 购物车总金额
  }
}
var mutations ={
  ADD(state){
    state.num +=1;
  },
  SHOWNAV(state){  //显示
    state.isNavShow = true;
  },
  HIDENAV(state){  //隐藏
    state.isNavShow = false;
  },
  CARTADD(state,data){  //购物车数据添加
    if(state.cartAddData.length>0){
      let item = state.cartAddData.filter(i => i.product_id===data.product_id)// 根据id对比cartAddData数据中是否有等于当前添加的数据
      if(item.length>0){
        item[0].count+=1// 购物车的数据加1
        return
      }else{
        // 没有匹配id的数据
        state.cartAddData.push(data);// 直接添加
      }
    }else{
      state.cartAddData.push(data);
    }
  }
}
var actions= {
  ADD({commit}){
    commit('ADD')
  },
  SHOWNAV({commit}){  //显示
    commit('SHOWNAV')
  },
  HIDENAV({commit}){  //隐藏
    commit('HIDENAV')
  },
  CARTADD({commit},data){  //购物车数据添加
    commit('CARTADD',data)
  },
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
