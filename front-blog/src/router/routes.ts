import { lazy } from 'react'

export const LoginPage = lazy(() => import('src/pages/login/index'))
const AddBlogPage = lazy(() => import('src/pages/add-blog'))
const AccountPage = lazy(() => import('src/pages/account'))
const HomePage = lazy(() => import('src/pages/home'))

export const routes = [
  {
    Component: HomePage,
    title: 'my blogs',
    index: true,
    path: '/',
  },
  {
    Component: AddBlogPage,
    title: 'add blog',
    path: '/add-blog',
  },
  {
    Component: AccountPage,
    title: 'account',
    path: '/account',
  },
]
