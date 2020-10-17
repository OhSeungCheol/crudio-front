import Vue from 'vue'

// Import Vue Router
import VueRouter from 'vue-router';

// 플러그인 형태의 VueRouter 등록
Vue.use(VueRouter);


import MainView from '../views/MainView.vue';
import PostsView from '../views/PostsView.vue';

// 라우터 객체 생성
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MainView },
    { path: '/posts', component: PostsView }
  ]
})

export default router;