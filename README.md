# 11ty plain bootstrap5

[![Build and Deploy](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml/badge.svg)](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml)

- Just plain bootstrap5, dart-sass and autoprefixer*.
- No gulp, grunt, webpack, just `beforeBuild`-hook.
- Have fun!

*\* as recommended by [official bootstrap documentation](https://getbootstrap.com/docs/5.0/getting-started/download/#source-files)*


Template for static site generator https://www.11ty.dev/.

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

- Navbar dropdowns have clickable parent item and separate toggle for dropdowns (split button)
- Sustainable Web Design: Comment out not needed bootstrap components in [src/assets/styles/main.scss](https://github.com/mandrasch/11ty-plain-bootstrap5/blob/main/src/assets/styles/main.scss)

## TODOs

- Add codesandbox.com link
- Add demo content with images
- Re-add sitemap.xml (See https://github.com/maxboeck/eleventastic)
- Re-add favicons
- Add basic a11y focus styles

## License

MIT license
