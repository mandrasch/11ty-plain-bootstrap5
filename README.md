# 11ty plain bootstrap5

[![Build and Deploy](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml/badge.svg)](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml)

Template for the awesome static site generator [eleventy/11ty](https://www.11ty.dev/)

- Just plain bootstrap5 and a simple build process:
  - SCSS compile with dart-sass and autoprefixer*
  - No gulp, grunt, webpack, just the [beforeBuild](https://www.d-hagemeier.com/en/sass-compile-11ty/)-hook of 11ty
- Have fun!

*\* as recommended by [official bootstrap documentation](https://getbootstrap.com/docs/5.0/getting-started/download/#source-files)*

## Demo

https://mandrasch.github.io/11ty-plain-bootstrap5/

## Usage

**Install via:**

- `npm install`

**Start local development with**

- `npm start`

**Where to edit?**

- Work with files in `src/`-folder
- **Don't** edit `_site/` folder (automatically generated)

**Generate a static build with**

- `npm run build`

## Credits

- This template is a fork of https://github.com/maxboeck/eleventastic (MIT license), although I removed a lot of features because of keeping it simple for now.
- Thanks to https://www.d-hagemeier.com/de/sass-compile-11ty/ for describing how `beforeBuild` works and can be used for dart-sass compilation.

## Special features

- Optional - uncomment in main.js: Navbar dropdowns with hover (vanillajs) without disturbing keyboard accessibility (See [src/assets/scripts/main.js](https://github.com/mandrasch/11ty-plain-bootstrap5/blob/main/src/assets/scripts/main.js) and [src/includes/navigation.njk](https://github.com/mandrasch/11ty-plain-bootstrap5/blob/main/src/includes/navigation.njk)), inspired by https://dequeuniversity.com/. Parent item becomes first child in dropdown, therefore it is accessible as well.
- Sustainable Web Design / Modular approach: Comment out not needed bootstrap components in [src/assets/styles/main.scss](https://github.com/mandrasch/11ty-plain-bootstrap5/blob/main/src/assets/styles/main.scss)

## TODOs

- Add codesandbox.com link
- Add demo content with images
- Re-add sitemap.xml (See https://github.com/maxboeck/eleventastic)
- Re-add favicons
- Add minimalistisc js bundling with esbuild, use bootstrap modular https://blog.r0b.io/post/bundle-javascript-with-eleventy-and-esbuild/
- Add simple html-minifier https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
- Add minimalistisc cache busting via timestamp https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/
- Add basic a11y focus styles
- Test a11y (web accessibility) thoroughly


## License

MIT license
