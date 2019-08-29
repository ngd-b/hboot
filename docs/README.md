---
home: false
heroImage: /hero.png
actionText: Get Started →
actionLink: /guide/
sidebarDepth: 2
sidebar: auto
prev: ./about
next: false
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2019-present hboot
---

:tada: :100:

<c-head />

[[toc]]

{{"v 1.1 something starting "}}
<p v-for="i in 3">{{i+" . "+i}}</p>

{{$page}}

::: v-pre
`{{home-page}}`
:::

::: tip
This is my territory
:::

::: warning
This is my territory
:::

::: danger
...
:::

``` js(4)
export default{
    data(){
        return {
            msg:"coding..."
        }
    }
}
```

