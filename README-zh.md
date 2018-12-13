# hugo-theme-even

A super concise theme for Hugo

> 该主题移植自 [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)

[在线预览 Demo](https://blog.olowolo.com/example-site/)

## Screenshots

![even-showcase](https://raw.githubusercontent.com/olOwOlo/hugo-theme-even/master/images/showcase.png)

## Feature

- 响应式
- 支持 Fancybox
- 版权信息，自定义许可协议
- 文章打赏，添加二维码
- 代码高亮显示
- mathjax

## Installation

```bash
$ git clone https://github.com/olOwOlo/hugo-theme-even themes/even
```

## Configuration

将 `exampleSite` 目录下的 `config.toml` 文件复制到你的站点目录下，根据自己的需求进行更改即可。

### More Configuration

- **favicon.ico:** 将你的 favicon.ico 放置在 `/static` 目录下即可，支持 apple-touch-icon、32x32、16x16、manifest.json、safari-pinned-tab.svg

- **Front matter:** 将主题目录下 `archetypes` 中的 `default.md` 文件复制到你的 `archetypes` 目录下。

- **Language:** 语言文件在 `/themes/even/data/even/` 目录下。在你的 `data` 目录下创建一个 `even` 目录并复制 `default.toml` 文件到你的 `/data/even/` 目录下，之后你可以按照自己需求更改它。

- **Theme color:** Default | Mint Green | Cobalt Blue | Hot Pink | Dark Violet 

    主题预置了上述五种颜色，你可以通过更改 `/src/css/_variable.scss` 文件中 `$theme-color-config` 的值来改变主题的颜色。
    
### Build

如果你更改了 `/src/` 目录下的任意文件，你需要重新编译它们。 
```bash
cd ./themes/even/src/
npm install
npm start
```

## License

Released under the [MIT](https://github.com/olOwOlo/hugo-theme-even/blob/master/LICENSE.md) License.

## Acknowledgements

- [ananke](https://github.com/budparr/gohugo-theme-ananke)
- [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)
- [hugo-nuo](https://github.com/laozhu/hugo-nuo)
