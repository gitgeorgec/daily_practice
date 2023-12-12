---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Daily Practice"
  text: "leetcode and frontend daily practice"
  actions:
    - theme: brand
      text: NOTES
      link: /notes
    - theme: brand
      text: ABOUT
      link: https://gitgeorgec.github.io/Personal_page/
  image:
    # src: https://raw.githubusercontent.com/gitgeorgec/Personal_page/dc7b66cd264b1a3fbf3ffdb0324eabe157f3c675/public/imgs/photo.svg
    alt: hero-section-image

features:
  - title: Leetcode
    details: daily leetcode practice
  - title: Javascript
    details: some javascript learning notes
  - title: python
    details: some python learning notes
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
