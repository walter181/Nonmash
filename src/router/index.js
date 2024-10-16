import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuth } from '@/router/authenticate'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookListView from '@/components/BookList.vue'
import DeleteBookView from '@/views/DeleteBookView.vue'
import EditBookView from '@/views/EditBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
const { isAuthenticated } = useAuth()
const routes = [
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/editBook',
    name: 'EditBook',
    component: EditBookView
  },
  {
    path: '/deleteBook',
    name: 'DeleteBook',
    component: DeleteBookView
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: BookListView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  if (to.name === 'About') {
    if (isAuthenticated.value === true) {
      console.log('index.js - login success', isAuthenticated.value)
      next()
    } else {
      console.log('index.js - need login', isAuthenticated.value)
      next({ name: 'Login' })
    }
    console.log('index.js', isAuthenticated.value)
  } else {
    console.log('index.js - login success', isAuthenticated.value)
    next()
  }
})
export default router
