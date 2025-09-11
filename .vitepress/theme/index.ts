import Layout from './Layout.vue'
import { setupRedirects } from './redirects'
import './custom.css'

export default {
    Layout,

    enhanceApp({ router }) {
        setupRedirects(router)
    }
}
