<template>
  <div v-if="visible" class="cloud-promo">
    <!-- Cloud Hosting promotion -->
    <div class="cloud-promo__info">
      <svg class="cloud-promo__cloud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.5h10.5Z" />
      </svg>

      <span class="cloud-promo__badge">Cloud Hosting</span>

      <span class="cloud-promo__text">
        Launch Bagisto on fully-managed cloud hosting — <strong>fast, secure and cost-effective plans.</strong>
      </span>
    </div>

    <!-- Actions -->
    <div class="cloud-promo__actions">
      <a
        href="https://bagisto.com/en/cloud/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Bagisto Cloud Hosting plans (opens in a new tab)"
        class="cloud-promo__plans"
      >
        View plans

        <svg class="cloud-promo__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>

      <button
        type="button"
        class="cloud-promo__dismiss"
        aria-label="Don't show again"
        @click="dismiss"
      >
        <span class="dismiss-label">Don't show again</span>

        <svg class="cloud-promo__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'bagisto_cloud_promo_dismissed'
const BAR_HEIGHT = '44px'

const visible = ref(false)

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY)) {
    return
  }

  visible.value = true

  // Push the VitePress nav, sidebar and content down to make room for the bar.
  document.documentElement.style.setProperty('--vp-layout-top-height', BAR_HEIGHT)
})

function dismiss() {
  localStorage.setItem(STORAGE_KEY, '1')

  visible.value = false

  document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
}
</script>

<style scoped>
.cloud-promo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  height: 44px;
  padding: 0 18px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 14px;
  background: linear-gradient(90deg, #2563eb 0%, #4f46e5 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

/* Left: promotion */
.cloud-promo__info {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.cloud-promo__cloud-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  opacity: 0.95;
}

.cloud-promo__badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.cloud-promo__text {
  color: rgba(255, 255, 255, 0.92);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cloud-promo__text strong {
  color: #ffffff;
  font-weight: 700;
}

/* Right: actions */
.cloud-promo__actions {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.cloud-promo__plans {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  padding: 7px 16px;
  border-radius: 8px;
  color: #1d4ed8;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: all 0.2s ease;
}

.cloud-promo__plans:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.cloud-promo__dismiss {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  background: transparent;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  padding: 4px;
  transition: color 0.2s ease;
}

.cloud-promo__dismiss:hover {
  color: #ffffff;
}

.cloud-promo__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .cloud-promo__text {
    display: none;
  }
}

@media (max-width: 640px) {
  .cloud-promo {
    padding: 0 12px;
    gap: 10px;
  }

  .cloud-promo__plans {
    padding: 7px 12px;
    font-size: 13px;
  }

  .cloud-promo__dismiss .dismiss-label {
    display: none;
  }
}
</style>
