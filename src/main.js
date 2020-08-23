import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
    Vue.component('Layout', DefaultLayout)

    Vue.filter('date', function (value) {
        return new Date(value).toLocaleDateString()
    })

    head.link.push({
        name: 'shortcut icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
    })

    head.link.push({
        name: 'icon',
        href: '/favicon.ico',
        type: 'image/x-icon',
    })
}
