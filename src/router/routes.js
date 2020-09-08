import Home from "../components/home";
import Login from "../components/login";
import MyLayout from "../layout";
import NotFound from "../components/notfound";
import Book from '../components/Book'
import Charts from '../components/Charts'
import Assets from '../components/Assets'

/* 第一层路由 */
const routes = [
  {
    path: "/",
    exact: true,
    component: MyLayout
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/index",
    component: MyLayout
  },
  {
    path: "/not-found",
    component: NotFound
  },
];

/* 第二层路由 */
const componentsRoutes = [
  {
    key: "home",
    path: "/",
    exact: true,
    component: Home
  },
  {
    key: "book",
    path: "/index/book",
    component: Book
  },
  {
    key: "charts",
    path: "/index/charts",
    component: Charts
  },
  {
    key: "assets",
    path: "/index/assets",
    component: Assets
  },
];

/* 菜单导航 */
const navi = [
  {
    title: "首页",
    key: "home",
    path: "/"
  },
  {
    title: "记账",
    key: "book",
    path: "/index/book"
  },
  {
    title: "报表",
    key: "charts",
    path: "/index/charts"
  },
  {
    title: "资产",
    key: "assets",
    path: "/index/assets"
  },
];

export { routes, componentsRoutes, navi };
