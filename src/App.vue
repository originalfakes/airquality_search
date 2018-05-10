<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1 id="title" style="text-align: center;">空氣品質指標查詢(AQI)</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Microsoft JhengHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
