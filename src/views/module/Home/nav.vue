<template>
  <div>
  <div class="index-category" v-for="(item, index) in [1,2,3,4]" :key="index">
    <div class="category" >
        <i class="iconfont iconfenlei"></i>
        <label>在线咨询{{item}}</label>
    </div>
  </div>
  </div>
</template>
