# [4.0.0](https://github.com/olOwOlo/hugo-theme-even/compare/v3.2.0...v4.0.0) (2018-11-06)


### Bug Fixes

* **busuanzi:** update busuanzi domain ([51e5aca](https://github.com/olOwOlo/hugo-theme-even/commit/51e5aca)), closes [#104](https://github.com/olOwOlo/hugo-theme-even/issues/104) [#108](https://github.com/olOwOlo/hugo-theme-even/issues/108) [#109](https://github.com/olOwOlo/hugo-theme-even/issues/109)
* **config:** MediaType's Suffix deprecated warning ([#103](https://github.com/olOwOlo/hugo-theme-even/issues/103)) ([b55831b](https://github.com/olOwOlo/hugo-theme-even/commit/b55831b))


### Code Refactoring

* **comment:** remove local js and css files ([f4bcf93](https://github.com/olOwOlo/hugo-theme-even/commit/f4bcf93))
* **param:** camelcase for parameter names ([fcb48d9](https://github.com/olOwOlo/hugo-theme-even/commit/fcb48d9))


### Features

* init admonition & refactor iconfont ([2517f74](https://github.com/olOwOlo/hugo-theme-even/commit/2517f74))
* **highlight:** add support for chroma ([7710103](https://github.com/olOwOlo/hugo-theme-even/commit/7710103))
* **mathjax:** configure to let mathjax use local files ([a3cab1a](https://github.com/olOwOlo/hugo-theme-even/commit/a3cab1a)), closes [#63](https://github.com/olOwOlo/hugo-theme-even/issues/63)
* **scripts:** configure to use local files for flowchart and sequence diagram ([cec9ea9](https://github.com/olOwOlo/hugo-theme-even/commit/cec9ea9)), closes [#76](https://github.com/olOwOlo/hugo-theme-even/issues/76) [#77](https://github.com/olOwOlo/hugo-theme-even/issues/77)
* **style:** dashed hr ([90a17f8](https://github.com/olOwOlo/hugo-theme-even/commit/90a17f8))
* **table:** responsive table ([9d8940b](https://github.com/olOwOlo/hugo-theme-even/commit/9d8940b)), closes [#107](https://github.com/olOwOlo/hugo-theme-even/issues/107)
* **title:** add anchor ([8d39099](https://github.com/olOwOlo/hugo-theme-even/commit/8d39099))


### BREAKING CHANGES

* **hugo:** Hugo minimum version required "0.50".
* **comment:** Remove local comment js/css files.
* **highlight:** You need add params to enable `chroma` or `highlight.js` since they are disabled by default.
* **param:** Rename parameter names.

    | origin   | now      |
    | :------: |:--------:|
    | fancyboxJ**s** | fancyboxJ**S** |
    | fancyboxC**ss**| fancyboxC**SS**|
    | baidu_push | baidu**P**ush |
    | baidu_analytics | baidu**A**nalytics |
    | baidu_verification | baidu**V**erification |
    | google_verification | google**V**erification |

* **version:** Version flag "4.x".

  ```toml
  [params]
    version = "4.x"           # 3.x -> 4.x
  ```


<a name="3.2.0"></a>
# [3.2.0](https://github.com/olOwOlo/hugo-theme-even/compare/v3.1.1...v3.2.0) (2018-07-06)


### Bug Fixes

* **gist:** css conflict ([#61](https://github.com/olOwOlo/hugo-theme-even/issues/61)) ([e1781a2](https://github.com/olOwOlo/hugo-theme-even/commit/e1781a2))
* **section:** remove hard coded `section` ([#67](https://github.com/olOwOlo/hugo-theme-even/issues/67)) ([6766e09](https://github.com/olOwOlo/hugo-theme-even/commit/6766e09))


### Features

* **mathjax:** add auto number for mathjax ([#53](https://github.com/olOwOlo/hugo-theme-even/issues/53)) ([af22a48](https://github.com/olOwOlo/hugo-theme-even/commit/af22a48))
* **comment:** add gitalk ([#51](https://github.com/olOwOlo/hugo-theme-even/issues/51)) ([5f8b79f](https://github.com/olOwOlo/hugo-theme-even/commit/5f8b79f))
* **config:** add option to hide header and footer for a post ([#58](https://github.com/olOwOlo/hugo-theme-even/issues/58)) ([094cfa5](https://github.com/olOwOlo/hugo-theme-even/commit/094cfa5))
* **config:** configure to show archive count ([2c7773b](https://github.com/olOwOlo/hugo-theme-even/commit/2c7773b)), closes [#46](https://github.com/olOwOlo/hugo-theme-even/issues/46)
* **i18n:** add Spanish(es) translation ([#48](https://github.com/olOwOlo/hugo-theme-even/issues/48)) ([d7c6059](https://github.com/olOwOlo/hugo-theme-even/commit/d7c6059))
* **post:** add out-of-date content warning ([#68](https://github.com/olOwOlo/hugo-theme-even/issues/68)) ([9033266](https://github.com/olOwOlo/hugo-theme-even/commit/9033266))



<a name="3.1.1"></a>

# [3.1.1](https://github.com/olOwOlo/hugo-theme-even/compare/v3.1.0...v3.1.1) (2018-03-12)

### Bug Fixes

* release: version param ([b18086f](https://github.com/olOwOlo/hugo-theme-even/commit/b18086f))

<a name="3.1.0"></a>
# [3.1.0](https://github.com/olOwOlo/hugo-theme-even/compare/v3.0.0...v3.1.0) (2018-03-12)


### Bug Fixes

* mathjax overflow for displayed mathematics ([#32](https://github.com/olOwOlo/hugo-theme-even/issues/32)) ([2b4a373](https://github.com/olOwOlo/hugo-theme-even/commit/2b4a373))


### Features

* add gitment module ([#36](https://github.com/olOwOlo/hugo-theme-even/issues/36)) ([1da110d](https://github.com/olOwOlo/hugo-theme-even/commit/1da110d))
* add hiddenFromHomePage param ([#37](https://github.com/olOwOlo/hugo-theme-even/issues/37)) ([5277734](https://github.com/olOwOlo/hugo-theme-even/commit/5277734))
* generate flowchart diagrams from code blocks ([#35](https://github.com/olOwOlo/hugo-theme-even/issues/35)) ([7043881](https://github.com/olOwOlo/hugo-theme-even/commit/7043881))
* generate sequence diagrams from code blocks ([#35](https://github.com/olOwOlo/hugo-theme-even/issues/35)) ([5bcf92d](https://github.com/olOwOlo/hugo-theme-even/commit/5bcf92d))
* support custom css and js ([#29](https://github.com/olOwOlo/hugo-theme-even/issues/29)) ([33594c0](https://github.com/olOwOlo/hugo-theme-even/commit/33594c0))


# 3.0.0

### Features

* feat: add `center`, `right`, `left` shortcodes
* feat: support 'right' and 'left' class value for the built-in `figure`

### Breaking changes

* See [Language Support](https://github.com/olOwOlo/hugo-theme-even#language-support).
* See [Favicon](https://github.com/olOwOlo/hugo-theme-even#favicon).
* Remove deprecated `bootcdn` param, you can use `[params.publicCDN]`.
* The `archive-paginate` param rename to `archivePaginate`.
* Add a `postMetaInFooter` parameter to control the `contentCopyright` container, and now you can show the author and lastMod information without displaying the license.
* There must be a `version` param, otherwise the build process will give an error.
* Minimum version required: 0.26 -> 0.35

```toml
# add
version = "3.x"  # Used to give a friendly message when you have an incompatible update

# add
postMetaInFooter = true

# rename archive-paginate
archivePaginate = 50
```
