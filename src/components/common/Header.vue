<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/">
      <b-navbar-brand>
       <h1>Crud-IO</h1>
      </b-navbar-brand>
    </router-link>
    <router-link to="/posts">
      <b-navbar-brand>Posts</b-navbar-brand>
    </router-link>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <router-link to="/"> <b-nav-item href="#">foo </b-nav-item></router-link>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
        
        <router-link to="bar">bar </router-link>
      </b-navbar-nav> -->

<!-- 드롭박스 버튼 -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</template>

<script>
  import mainRouter from '../../router/MainRouter';
    export default {
      components: mainRouter,
    }
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  font-weight: bold;
  color: white;
  background-color: #7386D5;
  align-items: center;
  display: flex;
  padding: 10px;
}
</style>