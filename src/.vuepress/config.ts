import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/", // 基础路由
  lang: "zh-CN", // 中文 
  title: "Java 学习笔记", // 标题
  theme,
  shouldPrefetch: false,
});
