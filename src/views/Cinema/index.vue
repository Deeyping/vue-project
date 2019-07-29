<template>
    <div>
      <Header  title="喵影院"/>
      <div id="content">
        <div class="cinema_menu">
          <router-link tag="div" to="cinema/citySwitch" class="city_switch">
            全城 <i class="iconfont icon-lower-triangle"></i>
          </router-link>
          <router-link tag="div" to="cinema/brandSwitch" class="brand_swtich">
            品牌 <i class="iconfont icon-lower-triangle"></i>
          </router-link>
          <router-link tag="div" to="cinema/featureSwitch" class="feature_switch">
            特色 <i class="iconfont icon-lower-triangle"></i>
          </router-link>
        </div>
        <CiList />
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
      <TabBar />
    </div>
</template>

<script>
  // 引入头部组件和导航组件
  import Header from "@/components/Header";
  import TabBar from "@/components/TabBar";
  import CiList from "@/components/CiList";

    export default {
        name: "index",
      components:{
          Header,
          TabBar,
          CiList
      }
    }
</script>

<style scoped>
  #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
