import Vue from 'vue'

// Import Vue Router
import VueRouter from 'vue-router';

// 플러그인 형태의 VueRouter 등록
Vue.use(VueRouter);


import MainView from '../views/PostsView.vue';
import PostsView from '../views/MainView.vue';

// 라우터 객체 생성
const router = new VueRouter({
  mode: history,
  routes: [
    { path: '/mainView', component: MainView },
    { path: '/postsView', component: PostsView }
  ]
})

export default router;