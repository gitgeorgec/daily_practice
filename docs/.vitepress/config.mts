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
      { text: "Notes", link: "/Notes" },
    ],

    sidebar: [
      {
        text: "Index",
        link: "/Notes",
        // items: [
        //   { text: "Markdown Examples", link: "/markdown-examples" },
        //   { text: "Runtime API Examples", link: "/api-examples" },
        // ],
      },
      ...sidebar,
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
