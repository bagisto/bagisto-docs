import { inBrowser } from 'vitepress'

import { redirects } from '../_redirects'

export function setupRedirects(router: any) {
  if (!inBrowser) return

  // Check for redirects on route changes and initial load
  const checkRedirect = (path: string) => {
    const cleanPath = path.replace(/\.html$/i, '').replace(/\/$/, '') || '/'
    const redirectTo = redirects[cleanPath] || redirects[cleanPath + '/']

    if (redirectTo) {
      console.log(`Redirect triggered: ${cleanPath} → ${redirectTo}`)
      router.go(redirectTo)
      return true
    }
    return false
  }

  // Handle initial page load
  if (window.location) {
    checkRedirect(window.location.pathname)
  }

  // Handle route changes (if supported)
  if (router.onBeforeRouteChange) {
    const originalHandler = router.onBeforeRouteChange
    router.onBeforeRouteChange = (to: string) => {
      if (checkRedirect(to)) {
        return false
      }
      return originalHandler ? originalHandler(to) : true
    }
  }
}
