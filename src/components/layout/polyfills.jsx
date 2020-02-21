// Establish our smoothscroll polyfills ---------------------------------
// note: smoothscroll requires window, so it isn't imported at build time
//       see gatsby-node.js for details
import smoothscroll from "smoothscroll-polyfill"
import smoothscrollAnchor from "smoothscroll-anchor-polyfill"

// note that I polyfill chrome here, too, because it has a bug
// where two smooth scrolls can't occur simultaneously
const isWindow = typeof window !== "undefined"
const isChrome =
  isWindow && navigator?.userAgent.toLowerCase().indexOf("chrome") > -1

if (isWindow) {
  window.__forceSmoothScrollPolyfill__ = isChrome
}

if (smoothscroll.polyfill) {
  smoothscroll.polyfill()
  smoothscrollAnchor.polyfill({ force: isChrome })
}
// End Smoothscroll Nonsense ---------------------------------------------
