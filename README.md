# hugo-theme-even

[![GitHub contributors](https://img.shields.io/github/contributors/olOwOlo/hugo-theme-even.svg?colorB=green)](https://github.com/olOwOlo/hugo-theme-even/contributors)
[![GitHub release](https://img.shields.io/github/release/olOwOlo/hugo-theme-even.svg?colorB=green)](https://github.com/olOwOlo/hugo-theme-even/releases)
[![GitHub commits (since latest release)](https://img.shields.io/github/commits-since/olOwOlo/hugo-theme-even/latest.svg?colorB=green)](https://github.com/olOwOlo/hugo-theme-even/compare)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/olOwOlo/hugo-theme-even/blob/master/LICENSE.md)

A super concise theme for Hugo

> It's a port of the [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)

[Demo](https://hugo-theme-even.netlify.app) | [中文说明](https://github.com/olOwOlo/hugo-theme-even/blob/master/README-zh.md)

## Screenshots

![even-showcase](https://raw.githubusercontent.com/olOwOlo/hugo-theme-even/master/images/showcase.png)

## Installation

```bash
$ git clone https://github.com/olOwOlo/hugo-theme-even themes/even
```

**Important:** Take a look inside the [`exampleSite`](https://github.com/olOwOlo/hugo-theme-even/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](https://github.com/olOwOlo/hugo-theme-even/blob/master/exampleSite/config.toml). **To use it, copy the [`config.toml`](https://github.com/olOwOlo/hugo-theme-even/blob/master/exampleSite/config.toml) in the root folder of your Hugo site.** Feel free to change it.

**Important:** This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/introduction/). Modifying contents in `assets` requires the extended version to be installed.

**NOTE:** For this theme, you should use **post** instead of **posts**, namely `hugo new post/some-content.md`.

## Language Support

> Translations are collected from the [`themes/even/i18n/`](https://github.com/olOwOlo/hugo-theme-even/tree/master/i18n) folder (built into the theme), as well as translations present in `i18n/` at the root of your project. The translations will be merged and take precedence over what is in the theme folder.

To use the translations, just set a correct value for [`defaultContentLanguage`](https://github.com/olOwOlo/hugo-theme-even/blob/master/exampleSite/config.toml#L3).

```toml
defaultContentLanguage = "en"  # en / zh-cn / other...
```

Can also support any other languages as well. For example, to support german, create a file `/i18n/de.yaml` in the root folder of your Hugo site. For reference template you can see the [`en.yaml`](https://github.com/olOwOlo/hugo-theme-even/tree/master/i18n/en.yaml) file.

P.S. In multilingual mode, the language which currently being used to render the website will be used.

## Favicon

In order to customize the favicon you need to place **all** the following files in the `static` folder at the root of your site, which will overwrite those files in the [`themes/even/static/`](https://github.com/olOwOlo/hugo-theme-even/tree/master/static) folder.

- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- browserconfig.xml
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- manifest.json
- mstile-150x150.png
- safari-pinned-tab.svg

A [favicon generator](https://www.google.com/search?q=favicon+generator) can help you generate these files.

## Front Matter

You can customize something for a single content in the content's front-matter. The [`themes/even/archetypes/default.md`](https://github.com/olOwOlo/hugo-theme-even/tree/master/archetypes/default.md) shows all available params. Copy this file in the `archetypes` folder at the root of your project will be useful.

## Shortcodes

This theme provides `center`,` right`, `left`,` music`, `admonition` shortcodes, and support `center`,` right`, `left` class for the built-in `figure`. See more information from [there](https://blog.olowolo.com/example-site/post/shortcodes/).

## Theme Color

There are five built-in theme colors ( Default | Mint Green | Cobalt Blue | Hot Pink | Dark Violet ), you can config it by changing the `$theme-color-config` value in [`/assets/sass/_variable.scss`](https://github.com/olOwOlo/hugo-theme-even/blob/master/assets/sass/_variables.scss#L5-L8).

## Update Theme

```bash
cd ./themes/even/
git pull
```

## License

Released under the [MIT](https://github.com/olOwOlo/hugo-theme-even/blob/master/LICENSE.md) License.

## Acknowledgements

- [ananke](https://github.com/budparr/gohugo-theme-ananke)
- [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)
- [hugo-nuo](https://github.com/laozhu/hugo-nuo)
