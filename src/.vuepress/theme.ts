import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.klrss.com", // 域名
  author: { // 作者
    name: "jinmunan",
    url: "https://docs.klrss.com",
  },
  iconAssets: "iconfont", // 图标
  logo: "/logo.png",  // logo
  favicon:"/favicon.ico", // favicon.ico
  repo: "jinmunan/jinmunan.github.io",  // git 仓库
  docsDir: "docs", // 文档路径
  navbar: navbar, // navbar 导航栏
  sidebar: sidebar, // sidebar 侧边栏
  footer: "docs.klrss.com", // 页脚
  displayFooter: true, // 展示页脚
  encrypt: {}, // 加密配置
  plugins: { // 插件
    // Markdown 增强功能
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
