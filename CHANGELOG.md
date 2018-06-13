# Changelog

## 3.0.0

- feat: add `center`, `right`, `left` shortcodes
- feat: support 'right' and 'left' class value for the built-in `figure`

### Breaking changes

- See [Language Support](https://github.com/olOwOlo/hugo-theme-even#language-support).
- See [Favicon](https://github.com/olOwOlo/hugo-theme-even#favicon).
- Remove deprecated `bootcdn` param, you can use `[params.publicCDN]`.
- The `archive-paginate` param rename to `archivePaginate`.
- Add a `postMetaInFooter` parameter to control the `contentCopyright` container, and now you can show the author and lastMod information without displaying the license.
- There must be a `version` param, otherwise the build process will give an error.
- Minimum version required: 0.26 -> 0.35

```toml
# add
version = "3.x"  # Used to give a friendly message when you have an incompatible update

# add
postMetaInFooter = true

# rename archive-paginate
archivePaginate = 50
```
