# hugo-theme-even
A super simple theme for Hugo

> 该主题完全移植自 [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)

## Demo
[在线预览 Demo](http://ahonn.github.io/)

## Feature
- 自定义样式
- 支持 Fancybox
- 版权信息，自定义许可协议
- 文章打赏，添加二维码

## Screenshots
![even-screenshots](http://ouv0frko5.bkt.clouddn.com/eerqv.jpg)

## Installation
```bash
$ git clone https://github.com/olOwOlo/hugo-theme-even themes/even
```

## Getting Start

> 拉至最下有一份完整的配置文件，你可以按需更改

### 配置站点基本信息

```toml
baseURL = "http://localhost:1313"
languageCode = "zh-CN"
defaultContentLanguage = "zh-CN"
title = "olOwOlo"
enableRobotsTXT = true
enableEmoji = true

theme = "even"

# 首页显示的文章条目数量，默认为10（可选）
paginate = 5

# Disqus Username（可选）
disqusShortname = "disqus_shortname"

# Google Analytics UA number（可选）
googleAnalytics = "UA-XXXXXXXX-X"

# Copyright of your post（可选）
copyright = "<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/cn/\" target=\"_blank\" title=\"中国大陆 (CC BY-NC-SA 3.0 CN)\">署名-非商用-相同方式共享 3.0</a>"

[author]
  name = "olOwOlo"

[sitemap]
  changefreq = "weekly"
  priority = 0.5
  filename = "sitemap.xml"
```

### 配置目录

**PS: Archives 的 url 为 /post/**

```toml
[[menu.main]]
  name = "Home"
  weight = 10
  identifier = "home"
  url = "/"
[[menu.main]]
  name = "Archives"
  weight = 20
  identifier = "archives"
  url = "/post/"
[[menu.main]]
  name = "Tags"
  weight = 30
  identifier = "tags"
  url = "/tags/"
[[menu.main]]
  name = "Categories"
  weight = 40
  identifier = "categories"
  url = "/categories/"
[[menu.main]]
  name = "About"
  weight = 50
  identifier = "about"
  url = "/about/"
```

### 主题配置

```toml
[params]
  # 请勿更改
  version = "2.5.0"
  # 站点建立时间
  since = "2017"
  # 站点信息（可选）
  keywords = ["olOwOlo", "blog", "博客"]
  description = "olOwOlo blog."
  # 归档、标签、分类每页显示的文章数目
  archive-paginate = 50
  
  # 一些全局开关（你可以在每一篇内容的 front matter 中单独关闭某些选项）
  toc = true                # 是否开启目录
  fancybox = true           # 是否启用fancybox（图片可点击）
  bootcdn = true            # 是否使用bootcdn(针对大陆推荐使用)
  mathjax = false           # 是否使用mathjax（数学公式）
  linkToMarkDown = false    # 是否在链接到markdown原始文件（如果你愿意共享你的markdown文件）

  # 文章打赏
  [params.reward]
    enable = true
    wechat = "/path/to/your/image.png"
    alipay = ""
  
  # 第三方服务
  # Changyan
  changyanAppid = ""
  changyanAppkey = ""
  # baidu push
  baidu_push = false
  # Baidu Analytics
  baidu_analytics = ""
  # Baidu Verification
  baidu_verification = ""
  # Google Verification
  google_verification = ""

  # 社交链接
  [params.social]
    a-email = "your@email.com"
    b-stack-overflow = ""
    c-twitter = ""
    d-facebook = ""
    e-linkedin = ""
    f-google = ""
    g-github = ""
    h-weibo = ""
    i-zhihu = ""
    j-douban = ""
    k-pocket = ""
    l-tumblr = ""
```

### 输出 markdown 文件(可选)

在 config.toml 中添加以下代码即可，此时将`linkToMarkDown`设置为`true`即可生效

```toml
[mediaTypes]
  [mediaTypes."text/plain"]
    suffix = "md"

[outputFormats.MarkDown]
  mediaType = "text/plain"
  isPlainText = true
  isHTML = false

[outputs]
  home = ["HTML", "RSS"]
  page = ["HTML", "MarkDown"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML", "RSS"]
  taxonomyTerm = ["HTML"]
```

### 更多配置
- **favicon.ico:** 将你的 favicon.ico 放置在`/static`目录下即可
- **主题颜色:** 主题自带 Default | Mint Green | Cobalt Blue | Hot Pink | Dark Violet 五种颜色

    你可以通过更改`/src/css/_variable.scss`中`$theme-color-config`的值来更改主题颜色
    
    你也可以自定义主题颜色，参见[源主题文档](https://github.com/ahonn/hexo-theme-even/wiki/%E4%BF%AE%E6%94%B9%E4%B8%BB%E9%A2%98%E9%A2%9C%E8%89%B2)

- **front matter:** `/even/archetypes/default.md`中说明了一些你可以在文章的 front matter 中使用的参数，你可以有选择性将其添加至你的`/archetypes/default.md`模板中

    ```yaml
    title: "{{ replace .TranslationBaseName "-" " " | title }}"
    date: {{ .Date }}
    lastmod: {{ .Date }}
    draft: true
    isCJKLanguage: true
    keywords: []
    description: ""
    tags: []
    categories: []
    # 如果这一篇内容的作者有些不同
    author: ""
    
    # 如果你在 config.toml 中打开了某些功能，你可以针对某一篇内容关闭它
    comment: false
    toc: false
    # 你也可以为这一篇内容定义另一个许可协议，使用 copyright: "这是另一个协议！"
    copyright: false 
    reward: false
    mathjax: false
    ```

- **设置站点语言:** `/data/even/default.toml`默认使用了中文语言，你可以按需更改。注意：主题只会使用`default.toml`文件，修改其他文件并不会生效。


### Build

如果你修改了 /src/ 目录下的任意文件，你需要重新编译使其生效
```bash
cd ./themes/even/src/
# 安装依赖环境
npm install
# 编译
npm start
```

### 一份完整的 config.toml 配置文件
```toml
baseURL = "http://localhost:1313"
languageCode = "zh-CN"
defaultContentLanguage = "zh-CN"
title = "olOwOlo"
enableRobotsTXT = true
enableEmoji = true

theme = "even"

# 首页显示的文章条目数量，默认为10（可选）
paginate = 5

# Disqus Username（可选）
disqusShortname = "disqus_shortname"

# Google Analytics UA number（可选）
googleAnalytics = "UA-XXXXXXXX-X"

# Copyright of your post（可选）
copyright = "<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/cn/\" target=\"_blank\" title=\"中国大陆 (CC BY-NC-SA 3.0 CN)\">署名-非商用-相同方式共享 3.0</a>"

[author]
  name = "olOwOlo"

[sitemap]
  changefreq = "weekly"
  priority = 0.5
  filename = "sitemap.xml"

# 目录
[[menu.main]]
  name = "Home"
  weight = 10
  identifier = "home"
  url = "/"
[[menu.main]]
  name = "Archives"
  weight = 20
  identifier = "archives"
  url = "/post/"
[[menu.main]]
  name = "Tags"
  weight = 30
  identifier = "tags"
  url = "/tags/"
[[menu.main]]
  name = "Categories"
  weight = 40
  identifier = "categories"
  url = "/categories/"
[[menu.main]]
  name = "About"
  weight = 50
  identifier = "about"
  url = "/about/"
  
[params]
  # 请勿更改
  version = "2.5.0"
  # 站点建立时间
  since = "2017"
  # 站点信息（可选）
  keywords = ["olOwOlo", "blog", "博客"]
  description = "olOwOlo blog."
  # 归档、标签、分类每页显示的文章数目
  archive-paginate = 50
  
  # 一些全局开关（你可以在每一篇内容的 front matter 中单独关闭某些选项）
  toc = true                # 是否开启目录
  fancybox = true           # 是否启用fancybox（图片可点击）
  bootcdn = true            # 是否使用bootcdn(针对大陆推荐使用)
  mathjax = false           # 是否使用mathjax（数学公式）
  linkToMarkDown = false    # 是否在链接到markdown原始文件（如果你愿意共享你的markdown文件）

  # 文章打赏
  [params.reward]
    enable = true
    wechat = "/path/to/your/image.png"
    alipay = ""
  
  # 第三方服务
  # Changyan
  changyanAppid = ""
  changyanAppkey = ""
  # baidu push
  baidu_push = false
  # Baidu Analytics
  baidu_analytics = ""
  # Baidu Verification
  baidu_verification = ""
  # Google Verification
  google_verification = ""

  # 社交链接
  [params.social]
    a-email = "your@email.com"
    b-stack-overflow = ""
    c-twitter = ""
    d-facebook = ""
    e-linkedin = ""
    f-google = ""
    g-github = ""
    h-weibo = ""
    i-zhihu = ""
    j-douban = ""
    k-pocket = ""
    l-tumblr = ""
```
## License

Released under the MIT License.

## 表示感谢

> 移植主题时参考了不少...

1. 一个好看的国语主题： [hugo-nuo](https://github.com/laozhu/hugo-nuo)
2. 一个好看的出现在 Quick Start 里的主题： [ananke](https://github.com/budparr/gohugo-theme-ananke)
3. 一个好看的源主题： [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)
