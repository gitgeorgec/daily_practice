import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";
import { readdirSync } from "fs";

const sidebar: DefaultTheme.Sidebar = readdirSync("./docs")
  .filter((i) => i.split(".").length === 1)
  .map((folderName): DefaultTheme.SidebarItem => {
    return {
      text: folderName,
      items: readdirSync(`./docs/${folderName}`).map((fileName) => {
        return {
          text: fileName.replace(".md", " "),
          link: `/${folderName}/${fileName}`,
        };
      }),
      collapsed: true,
    };
  });

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daily Practice",
  description: "leetcode and frontend daily practice",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes" },
      {
        text: "About",
        link: "https://gitgeorgec.github.io/Personal_page/",
      },
    ],

    sidebar: [
      {
        text: "Index",
        link: "/notes",
      },
      ...sidebar,
    ],
    search: { provider: "local" },

    socialLinks: [{ icon: "github", link: "https://github.com/gitgeorgec" }],
  },
  base: "/daily_practice/",
});
