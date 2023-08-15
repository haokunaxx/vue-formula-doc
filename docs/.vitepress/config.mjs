import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue-formula",
  description: "vue-formula doc",
  base: '/vue-formula-doc/',
  vite: {
    plugins: [
      vueJsx({}),
    ],
    // ssr: {
    //   noExternal: ['vue-formula', 'RenderItem', 'vue', 'element-plus']
    // }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '基本使用',
        items: [
          { text: '表单布局', link: '/BasicUsage/Layout' },
          { text: '表单联动', link: '/BasicUsage/Association' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
