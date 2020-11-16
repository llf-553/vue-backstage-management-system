import homeA from './homeA.vue'
import homeB from './homeB.vue'

const QfLayout = () =>
    import ('./common/layout/QfLayout.vue')
const CateSelect = () =>
    import ('./good/CateSelect.vue')
const Login = () =>
    import ('./common/login/login.vue')
export {
    homeA,
    homeB,
    QfLayout,
    CateSelect,
    Login
}