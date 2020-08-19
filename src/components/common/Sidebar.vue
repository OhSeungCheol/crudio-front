<template>
  <div id='main-div'>
    <div id='sub-div'>
      <div class='menu'>Dash Board</div>
      <div class='menu'>Post</div>
      <div class='menu'>Manage</div>  
    </div>
  </div>
</template>


<script>
    export default {
    }
</script>

<style scoped>
    #main-div {
      position: fixed;
      height: 100%;
      width: 220px;
      background: #333333;
      color: white;
      z-index: -1;
    }
    #sub-div {
      padding-top: 60px;
      font-size: 20px;
    }
    .menu {
      margin: 6px;
    }
</style>