<template>
  <div v-if="mounted" ref="root" class="mp-promo" :class="{ 'is-compact': compact }">
    <section class="mp-card" aria-label="Multi-Vendor Marketplace extension">
      <!-- Compact: the whole card is one link, used when the page outline leaves little room -->
      <a
        v-if="compact"
        :href="STORE_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore the Multi-Vendor Marketplace extension with Generative AI (opens in a new tab)"
        class="mp-compact"
      >
        <span class="mp-tile mp-tile--small">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9.5 4.6 4.2A1.5 1.5 0 0 1 6 3h12a1.5 1.5 0 0 1 1.4 1.2L21 9.5" />
            <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
            <path d="M5 12.3V21h14v-8.7M10 21v-5h4v5" />
          </svg>
        </span>

        <span class="mp-compact__text">
          <span class="mp-compact__title">Multi-vendor marketplace</span>

          <span class="mp-ai">
            <svg class="mp-sparkle" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5l2.2 6.3 6.3 2.2-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-2.2z" />
              <path d="M19 15l1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1z" />
            </svg>

            <span class="mp-ink">With Generative AI</span>
          </span>
        </span>

        <svg class="mp-compact__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>

      <!-- Full card -->
      <template v-else>
        <div class="mp-head">
          <span class="mp-tile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9.5 4.6 4.2A1.5 1.5 0 0 1 6 3h12a1.5 1.5 0 0 1 1.4 1.2L21 9.5" />
              <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
              <path d="M5 12.3V21h14v-8.7M10 21v-5h4v5" />
            </svg>
          </span>

          <span class="mp-badge">
            <svg class="mp-sparkle" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5l2.2 6.3 6.3 2.2-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-2.2z" />
              <path d="M19 15l1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1z" />
            </svg>

            <span class="mp-ink">Generative AI</span>
          </span>
        </div>

        <p class="mp-title">
          Turn your store into a <span class="mp-ink">multi-vendor marketplace</span>
        </p>

        <p class="mp-text">
          Sellers describe a product, and AI drafts the listing for them to review.
        </p>

        <ul class="mp-list">
          <li v-for="highlight in HIGHLIGHTS" :key="highlight">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>

            {{ highlight }}
          </li>
        </ul>

        <a
          :href="STORE_URL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore the Multi-Vendor Marketplace extension (opens in a new tab)"
          class="mp-cta"
        >
          Explore Marketplace

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        <a
          :href="DEMO_URL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Try the Multi-Vendor Marketplace live demo (opens in a new tab)"
          class="mp-demo"
        >
          Try the live demo

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </template>
    </section>
  </div>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const STORE_URL = 'https://store.webkul.com/laravel-multi-vendor-marketplace.html'
const DEMO_URL = 'https://demo.bagisto.com/marketplace/'

const HIGHLIGHTS = [
  'Writes descriptions & SEO meta',
  'Suggests attributes & categories',
  'Reads product photos you attach'
]

// The card's size depends on the page outline, which is only measured in the
// browser, so it renders after mount instead of showing the wrong size first.
const mounted = ref(false)
const compact = ref(false)
const root = ref(null)

let fullHeight = 0
let observer

// A long page outline leaves no room for the full card, so the compact one
// takes its place instead of covering the lower half of the outline. The full
// card's height is kept from the last time it was shown, so switching to the
// compact card cannot switch it straight back.
function fit() {
  const wrapper = root.value
  const container = wrapper?.closest('.aside-container')

  if (!container) return

  if (!compact.value) {
    fullHeight = wrapper.offsetHeight
  }

  const outline = container.querySelector('.VPDocAsideOutline')
  const available = container.clientHeight - parseFloat(getComputedStyle(container).paddingTop)

  compact.value = (outline?.offsetHeight ?? 0) + fullHeight > available
}

onMounted(async () => {
  mounted.value = true

  await nextTick()

  const container = root.value?.closest('.aside-container')

  if (!container) return

  // Fit before the first paint, then again whenever the window, the outline
  // (on navigation) or the card itself changes size.
  fit()

  observer = new ResizeObserver(() => requestAnimationFrame(fit))

  observer.observe(container)
  observer.observe(root.value)

  const outline = container.querySelector('.VPDocAsideOutline')

  if (outline) observer.observe(outline)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
@property --mp-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

/* Sticks to the bottom of the aside, so the card stays in view below a long
   outline. The bottom padding keeps it clear of the AI chat button in the
   corner of the window, and the negative margin takes the place of the aside's
   own bottom padding, so the card does not move when the aside is scrolled to
   its end. */
.mp-promo {
  position: sticky;
  bottom: 0;
  z-index: 1;
  margin-bottom: -32px;
  padding: 24px 0 100px;
  background: linear-gradient(to bottom, transparent, var(--vp-c-bg) 24px);
}

.mp-card {
  --mp-bg: var(--vp-c-bg);
  --mp-ink: linear-gradient(100deg, #6d28d9 0%, #1d4ed8 55%, #0369a1 100%);
  --mp-accent: #6d28d9;
  --mp-tint: rgba(124, 58, 237, 0.08);
  --mp-glow-1: rgba(124, 58, 237, 0.13);
  --mp-glow-2: rgba(14, 165, 233, 0.11);

  border: 1px solid transparent;
  border-radius: 16px;
  padding: 16px;
  background:
    radial-gradient(120% 70% at 100% 0%, var(--mp-glow-1), transparent 65%) padding-box,
    radial-gradient(100% 60% at 0% 100%, var(--mp-glow-2), transparent 65%) padding-box,
    linear-gradient(var(--mp-bg), var(--mp-bg)) padding-box,
    conic-gradient(from var(--mp-angle, 0deg), #7c3aed, #2563eb, #0ea5e9, #a855f7, #7c3aed) border-box;
  box-shadow: 0 14px 28px -18px rgba(79, 70, 229, 0.55);
  animation: mp-spin 8s linear infinite;
}

:global(.dark) .mp-card {
  --mp-bg: var(--vp-c-bg-soft);
  --mp-ink: linear-gradient(100deg, #a78bfa 0%, #60a5fa 55%, #22d3ee 100%);
  --mp-accent: #a78bfa;
  --mp-tint: rgba(167, 139, 250, 0.14);
  --mp-glow-1: rgba(167, 139, 250, 0.2);
  --mp-glow-2: rgba(34, 211, 238, 0.1);

  box-shadow: 0 14px 32px -18px rgba(124, 58, 237, 0.75);
}

@keyframes mp-spin {
  to {
    --mp-angle: 360deg;
  }
}

.mp-ink {
  background-image: var(--mp-ink);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Header: storefront tile and AI badge */
.mp-head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mp-tile {
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed 0%, #2563eb 60%, #0ea5e9 100%);
  box-shadow: 0 6px 14px -6px rgba(37, 99, 235, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.mp-tile svg {
  width: 18px;
  height: 18px;
}

.mp-tile--small {
  width: 30px;
  height: 30px;
  border-radius: 9px;
}

.mp-tile--small svg {
  width: 16px;
  height: 16px;
}

.mp-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: var(--mp-tint);
  box-shadow: inset 0 0 0 1px var(--mp-tint);
}

.mp-sparkle {
  flex: none;
  width: 13px;
  height: 13px;
  color: var(--mp-accent);
  animation: mp-twinkle 2.4s ease-in-out infinite;
}

@keyframes mp-twinkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  50% {
    transform: scale(0.82) rotate(18deg);
    opacity: 0.7;
  }
}

/* Copy */
.mp-title {
  margin: 14px 0 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.mp-text {
  margin: 0 0 12px;
  font-size: 12.5px;
  line-height: 18px;
  color: var(--vp-c-text-2);
}

.mp-list {
  display: grid;
  gap: 7px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.mp-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--vp-c-text-1);
  text-wrap: balance;
}

.mp-list svg {
  flex: none;
  width: 16px;
  height: 16px;
  margin-top: 1px;
  padding: 3px;
  border-radius: 999px;
  color: var(--mp-accent);
  background: var(--mp-tint);
}

/* Actions */
.mp-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(100deg, #6d28d9 0%, #1d4ed8 50%, #0369a1 100%);
  background-size: 180% 100%;
  background-position: 0% 50%;
  box-shadow: 0 8px 18px -10px rgba(29, 78, 216, 0.9);
  transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.mp-cta:hover {
  background-position: 100% 50%;
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -10px rgba(109, 40, 217, 0.95);
}

.mp-cta svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.mp-cta:hover svg {
  transform: translateX(2px);
}

.mp-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 9px;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.mp-demo:hover {
  color: var(--vp-c-brand-1);
}

.mp-demo svg {
  width: 13px;
  height: 13px;
}

.mp-cta:focus-visible,
.mp-demo:focus-visible,
.mp-compact:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

/* Compact card */
.is-compact .mp-card {
  padding: 0;
}

.mp-compact {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 15px;
  color: inherit;
  text-decoration: none;
}

.mp-compact__text {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.mp-compact__title {
  font-size: 13px;
  font-weight: 700;
  line-height: 17px;
  color: var(--vp-c-text-1);
}

.mp-ai {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.mp-ai .mp-sparkle {
  width: 12px;
  height: 12px;
}

.mp-compact__arrow {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-2);
  transition: transform 0.2s ease, color 0.2s ease;
}

.mp-compact:hover .mp-compact__arrow {
  color: var(--vp-c-brand-1);
  transform: translateX(2px);
}

@media (prefers-reduced-motion: reduce) {
  .mp-card,
  .mp-sparkle {
    animation: none;
  }

  .mp-cta,
  .mp-cta svg,
  .mp-demo,
  .mp-compact__arrow {
    transition: none;
  }

  .mp-cta:hover,
  .mp-cta:hover svg,
  .mp-compact:hover .mp-compact__arrow {
    transform: none;
  }
}
</style>
