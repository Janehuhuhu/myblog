const nginxConfig = require('../nginx/config')
const htmlConfig = require('../html/config')
const cssConfig = require('../css/config')
const npmConfig = require('../npm/config')
const jsConfig = require('../js/config')
const internetConfig = require('../internet/config')
const gitConfig = require('../git/config')
const vueConfig = require('../vue/config')
const databaseConfig = require('../database/config')
const nodeConfig = require('../node/config')
const newsConfig = require('../news/config')

module.exports = {
  title: '小生天地', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: '小生学习天地', // meta 中的描述文字，用于SEO
  head: [
    ['link',
      { rel: 'icon', href: '/logo.jpeg' } // 浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    ],
  ],
  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {
    logo: '/logo.jpeg',  //网页顶端导航栏左上角的图标
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },
      // {
      //   text: '社区资讯', link: '/news/'
      // },
      { text: 'Github', link: 'https://github.com/Janehuhuhu' },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      ...nginxConfig,
      ...htmlConfig,
      ...cssConfig,
      ...npmConfig,
      ...internetConfig,
      ...gitConfig,
      ...jsConfig,
      ...vueConfig,
      ...databaseConfig,
      ...nodeConfig,
      ...newsConfig,
    }
  },
  dest: 'public',
}