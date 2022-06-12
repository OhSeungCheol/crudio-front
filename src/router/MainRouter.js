import Vue from 'vue'

// Import Vue Router
import VueRouter from 'vue-router';

// 플러그인 형태의 VueRouter 등록
Vue.use(VueRouter);


import MainView from '../views/MainView.vue';
import PostsView from '../views/PostsView.vue';
import NewsView from '../views/NewsView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import SingupView from '../views/SingupView.vue';
import Contents from '../components/common/Contents';
import Dashboard from '../components/common/Dashboard';

// 라우터 객체 생성
const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: MainView,
        },
        { 
            path: '/news', 
            component: NewsView
        },
        { 
            path: '/posts', 
            component: PostsView
        },
        { 
            path: '/about', 
            component: AboutView
        },
        { 
            path: '/myPage',
            component: Contents,
            children:[
                {
                    path: '', component: Dashboard
                },
            ]
        },
        { 
            path: '/login', 
            component: LoginView
        },
        { 
            path: '/singup', 
            component: SingupView
        },
    ]
})

export default router;