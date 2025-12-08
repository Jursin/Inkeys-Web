/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '开始下载', icon: 'material-symbols:download', link: '/download' },
  { text: 'WIKI文档', icon: 'fa:wikipedia-w', link: 'https://wiki.inkeys.top/' },
  { text: '开发者博客', icon: 'material-symbols:help', link: '/tutorial/tutorial.md' },
  { text: '社区名片', icon: 'fluent:people-community-48-regular', link: '/community' },
  { text: '相关链接', icon: 'material-symbols:link', link: '/link' }
])
