# 11ty plain bootstrap5

[![Build and Deploy](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml/badge.svg)](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml)

Template for the awesome static site generator [Eleventy/11ty](https://www.11ty.dev/)

- Bootstrap 5 (via npm)
- Laravel Mix for scss / javascript compilation (incl. Autoprefixer)

**Demo:** https://mandrasch.github.io/11ty-plain-bootstrap5/

Plugins used:

- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- [eleventy-rss](https://www.11ty.dev/docs/plugins/rss/) (to get absolute URLs for social media OG-tags)

## Usage

**Install via:**

- `npm install`

**Start local development with**

- `npm run dev`

**Where to edit?**

- Work with files in `src/`-folder
- **Don't** edit `_site/` folder (automatically generated)

**Generate a static build with**

- `npm run build`

## Credits

- Compilation of SCSS/JS via [bergwerk/11ty-mix](https://github.com/bergwerk/11ty-mix) by [@marvinhuebner](https://github.com/marvinhuebner)
- Inspired by https://github.com/maxboeck/eleventastic (MIT license)
- https://5balloons.info/setting-up-bootstrap-5-workflow-using-laravel-mix-webpack/
- [Eleventy (11ty) Static HTML Theme Conversion (YouTube)](https://www.youtube.com/watch?v=z-o1W9ijUhI&list=PLOSLUtJ_J3rrJ1R1qEf8CCEpV3GgbJGNr)
- Layout based on [Jumbotron Example](https://getbootstrap.com/docs/5.0/examples/)

## Technical background:

Bootstrap information for npm/sass:

- https://getbootstrap.com/docs/5.0/getting-started/download/#source-files
- https://getbootstrap.com/docs/5.0/customize/sass/

Sustainable Web Design:

- Comment out not needed bootstrap components in `src/scss/app.scss`

## TODOs

- [ ] Add "Open in Gitpod" link
- [ ] Add more demo content with images
- [ ] Add sitemap.xml (See https://github.com/maxboeck/eleventastic)
- [ ] Add minimalistisc cache busting via timestamp https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/?
- [ ] Add basic a11y focus styles
- [ ] Try https://github.com/11ty/eleventy-plugin-vite with Eleventy v2?

## License

MIT license

_(License is for compatibility purposes only. You don't have attribute my additions, mostly just config stuff done.)_
