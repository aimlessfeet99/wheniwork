import { RoutesConstent } from 'constants/routes'
import Home from 'pages/home'
import Empty from 'pages/empty'

const routes = [{
    path: RoutesConstent.root,
    Component: Home,
    children: []
}, {
    path: RoutesConstent.home,
    Component: Home,
    children: []
}, {
    path: RoutesConstent.notFound,
    Component: Empty,
    children: []
}]

export default routes