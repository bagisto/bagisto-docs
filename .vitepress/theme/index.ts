import DefaultTheme from 'vitepress/theme'
import { setupRedirects } from './redirects'
import './custom.css'

export default {
    ...DefaultTheme,

    enhanceApp({ router }) {
        setupRedirects(router)
    }
}
