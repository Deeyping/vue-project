<template>
    <div>
      <Header  title="我的喵"/>
      <div id="content">
        <Login />
      </div>
      <TabBar />
    </div>
</template>

<script>
  import Header from '@/components/Header';
  import TabBar from '@/components/TabBar';
  import Login from '@/components/Login';
    export default {
        name: "index",
        components:{
          Header,
          TabBar,
          Login
        }
    }
</script>

<style scoped>

</style>
