<template>
  <div id="app"></div>
</template>

<script>
import {request} from "./network/request";
export default {
  name: "App",
  components: {},
  created() {
    request({
      url: "/home/multidata"
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
