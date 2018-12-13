# hugo-theme-even

A super concise theme for Hugo

> It's a port of the [hexo-theme-even](https://github.com/ahonn/hexo-theme-even)

[Demo](https://blog.olowolo.com/example-site/) | [中文说明](https://github.com/olOwOlo/hugo-theme-even/blob/master/README-zh.md)

## Screenshots

![even-showcase](https://raw.githubusercontent.com/olOwOlo/hugo-theme-even/master/images/showcase.png)

## Feature

- Responsive
- Fancybox
- Config license for content
- highlight.js
- Custom theme color
- mathjax

## Installation

```bash
$ git clone https://github.com/olOwOlo/hugo-theme-even themes/even
```

## Configuration

Copy the `config.toml` file from the `exampleSite` directory to your site directory and change it.

### More Configuration

- **favicon.ico:** Just put your favicon.ico under the `/static` directory if you want to change the default favicon.ico.

- **Front matter:** Copy the `default.md` file from the `archetypes` directory to your `archetypes`.

- **Language:** Language files are under `/themes/even/data/even/` directory. Create a new directory `even` under your `data` directory and copy the `default.toml` to your `/data/even/`, and then you can change it if you want.

- **Theme color:** Default | Mint Green | Cobalt Blue | Hot Pink | Dark Violet 

    You can config it by change the `$theme-color-config` value in `/src/css/_variable.scss`.
    
### Build

if you change any file under `/src/`, you need to rebuild. 
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
