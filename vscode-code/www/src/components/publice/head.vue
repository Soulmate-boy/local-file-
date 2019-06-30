<template>
  <div id="head">
    <article class="a-1">
      <router-link to="/one">01</router-link>
      <router-link to="/two">02</router-link>
      <router-link to="/three">03</router-link>
      <router-link to="/four">04</router-link>
    </article>
    <article class="a-2">
        <div>
            000
        </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "Head"
};
</script>
<style>
#head {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 0 20px;
  box-sizing: border-box;
  background: url("../..//assets/h-bg.png")no-repeat;
  background-size:100% 100%;
}
.a-1 {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.a-1 > a {
  width: 80px;
  height: 100%;
  text-align: center;
  line-height: 50px;
  border: 1px solid red;
  margin-right:10px;
}
.a-2{
    width:300px;
    height:100%;
    border:1px solid red;
}
.a-2>div{
    width:100%;
    height:100%;
    text-align: center;
    line-height: 50px;
}

</style>


