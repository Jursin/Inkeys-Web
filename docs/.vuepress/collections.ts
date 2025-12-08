import { defineCollection, defineCollections } from "vuepress-theme-plume";

const tutorial = defineCollection({
  type: 'doc',
  dir: 'tutorial',
  linkPrefix: '/tutorial/',
  title: '开发者博客',
  sidebar: 'auto',
});

export default defineCollections([tutorial]);
