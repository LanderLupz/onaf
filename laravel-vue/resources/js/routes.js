import Dashboard from './components/Dashboard.vue';
import Billing from './pages/billing/Billing.vue';
import Reports from './pages/reports/Reports.vue';
import References from './pages/references/References.vue';
import User from './pages/user-management/User-management.vue';
export default[
    {
        path: '/laravel-vue/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },

    {
        path: '/laravel-vue/billing',
        name: 'admin.billing',
        component: Billing,
    },

    {
        path: '/laravel-vue/reports',
        name: 'admin.reports',
        component: Reports,
    },

    {
        path: '/laravel-vue/references',
        name: 'admin.references',
        component: References,
    },

    {
        path: '/laravel-vue/user-management',
        name: 'admin.user-management',
        component: User,
    }

]