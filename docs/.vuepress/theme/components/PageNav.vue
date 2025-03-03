<template>
  <div
    v-if="prev || next"
    class="page-nav"
  >
    <p class="inner">
      <span
        v-if="prev"
        class="prev"
      >
        ←
        <a
          v-if="prev.type === 'external'"
          class="prev"
          :href="prev.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ prev.title || prev.path }}

          <OutboundLink />
        </a>

        <RouterLink
          v-else
          class="prev"
          :to="prev.path"
        >
          {{ prev.title || prev.path }}
        </RouterLink>
      </span>

      <span
        v-if="next"
        class="next"
      >
        <a
          v-if="next.type === 'external'"
          :href="next.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ next.title || next.path }}

          <OutboundLink />
        </a>

        <RouterLink
          v-else
          :to="next.path"
        >
          {{ next.title || next.path }}
        </RouterLink>
        →
      </span>
    </p>
  </div>
</template>

<script>
import { resolvePage } from '../util'

export default {
  name: 'PageNav',

  props: ['sidebarItems'],

  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType;

  const link = getPageLinkConfig($page) ?? getThemeLinkConfig($themeConfig);

  if (link === false) return null;
  if (typeof link === "string") return resolvePage($site.pages, link, $route.path);

  return resolveLink($page, sidebarItems);
}

function find(page, items, offset) {
  const res = [];
  flatten(items, res);

  for (let i = 0; i < res.length; i++) {
    const cur = res[i];

    const isPageMatch =
      cur.type === 'page' && cur.path === decodeURIComponent(page.path);

    const isGroupMatch =
      cur.type === 'group' && cur.title === decodeURIComponent(page.title);

    if (isPageMatch || isGroupMatch) {
      return res[i + offset] || null;
    }
  }

  return null;
}

function flatten (items, res) {
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    res.push(currentItem);

    if (currentItem.type === 'group') {
      flatten(currentItem.children || [], res);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right
</style>
