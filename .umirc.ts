import { defineConfig } from 'dumi';

const repo = '';

export default defineConfig({
  title: 'Recall',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  locales: [['zh-CN', '中文']],
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/recall-lidemin',
    },
  ],
  // more config: https://d.umijs.org/config
});
