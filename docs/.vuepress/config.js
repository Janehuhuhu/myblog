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
      { text: '社区资讯', link: '/社区资讯/' },

      //格式二：添加下拉菜单，link指向的文件路径
      // {
      //   text: '分类',  //默认显示        
      //   ariaLabel: '分类',   //用于识别的label
      //   items: [
      //     { text: '文章', link: '/pages/folder1/test1.md' },
      //     //点击标签会跳转至link的markdown文件生成的页面
      //     { text: '琐碎', link: '/pages/folder2/test4.md' },
      //   ]
      // },
      // { text: '功能演示', link: '/pages/folder1/test3.md' },

      //格式三：跳转至外部网页，需http/https前缀
      { text: 'Github', link: 'https://github.com/Janehuhuhu' },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/': [
        {
          title: 'Nginx',   // 一级菜单名称
          collapsable: true, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['专题/Nginx/安装部署.md', '安装部署'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
            ['专题/Nginx/常用nginx命令.md', '常用nginx命令'],
            ['专题/Nginx/配置文件详解.md', '配置文件详解'],
            ['专题/Nginx/默认网站.md', '默认网站'],
            ['专题/Nginx/虚拟主机.md', '虚拟主机'],
            ['专题/Nginx/反向代理.md', '反向代理'],
            ['专题/Nginx/下载限速.md', '下载限速'],
            ['专题/Nginx/URL重写.md', 'URL重写'],
            ['专题/Nginx/Nginx优化.md', 'Nginx优化'],
            ['专题/Nginx/Nginx缓存.md', 'Nginx缓存'],
            ['专题/Nginx/Nginx镜像服务器.md', 'Nginx缓镜像服务器'],
            ['专题/Nginx/Nginx集群.md', 'Nginx集群'],
          ]
        },
        {
          title: 'HTML & CSS',
          collapsable: true, 
          sidebarDepth: 1,
          children: [
            ['HTML & CSS/lang属性.md', 'lang属性'],
            ['HTML & CSS/tailwind.md', 'taildwind']
          ]
        },
        {
          title: 'Webpack',
          collapsable: true, 
          sidebarDepth: 1,
          children: [
            ['Webpack/webpack基础.md', 'webpack基础'],
          ]
        },
        {
          title: 'JS',
          collapsable: true, 
          sidebarDepth: 1,
          children: [
            ['JS/iframe通信.md', 'iframe通信']
          ]
        },
        {
          title: '计算机网络', 
          collapsable: true, 
          sidebarDepth: 1,    
          children: [
            ['专题/计算机网络/charles.md', 'charles'],
          ]
        },
        {
          title: 'npm', 
          collapsable: true, 
          sidebarDepth: 1,    
          children: [
            ['npm/npm 安装原理.md', 'npm 安装原理'],
            ['npm/npm 发包.md', 'npm 发包'],
            ['npm/pnpm和yarn2.md', 'pnpm 和 yarn2'],
          ]
        },
        {
          title: 'Vue', 
          collapsable: true, 
          sidebarDepth: 1,    
          children: [
            ['vue全家桶/Vue的使用/vue基础.md', 'vue基础'],
          ]
        },
        {
          title: 'GIT', 
          collapsable: true, 
          sidebarDepth: 1,    
          children: [
            ['GIT/常用命令.md', '常用命令'],
            ['GIT/揭秘commit丢失.md', '揭秘commit丢失']
          ]
        },
      ]
    }
  },
  dest: 'public',
}