# 11ty-plain-bootstrap5

[![Build and Deploy](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml/badge.svg)](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml)

Minimalistic template for the awesome static site generator [Eleventy/11ty](https://www.11ty.dev/), just 

- [Bootstrap 5](https://www.npmjs.com/package/bootstrap) (via npm)
- [Laravel Mix](https://www.npmjs.com/package/laravel-mix)* for SCSS / JS compilation (incl. Autoprefixer)

_* Laravel Mix is a wrapper around webpack, it is purely NodeJS, no PHP involved ;-)_

Plugins used (you don't have to keep them):

- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- [eleventy-rss](https://www.11ty.dev/docs/plugins/rss/) (to get absolute URLs for social media open graph tags)

## Live demo

- https://mandrasch.github.io/11ty-plain-bootstrap5/

[![Open in Gitpod](gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/11ty-plain-bootstrap5)

## Usage

**Install via:**

- `npm install`

**Start local development with**

- `npm run dev`

Preview runs on http://localhost:8080/.

**Where to edit?**

- Work with files in `src/`-folder
- Homepage: `src/index.njk`, Config: `.eleventy.js`
- **Don't** edit `_site/` folder (automatically generated)

**Generate a static build with**

- `npm run build`

_Advice: `BASE_URL` should be set as node env variable for open graph image support (they need full instead of relative URLs. You can strip them out as well in `meta.njk`. See `.github/workflows/build-deploy.yaml` for information. Currently it defaults to http://localhost:8080 if no env var is set.)_

## Credits

- Big thanks to [bergwerk/11ty-mix](https://github.com/bergwerk/11ty-mix) by [@marvinhuebner](https://github.com/marvinhuebner) for example of using Laravel Mix!
- Some icons used of https://icons.getbootstrap.com/ (included via svg inline, MIT license)
- Inspired by https://github.com/maxboeck/eleventastic (MIT license)
- https://5balloons.info/setting-up-bootstrap-5-workflow-using-laravel-mix-webpack/
- Learned a lot from [Eleventy (11ty) Static HTML Theme Conversion (YouTube)](https://www.youtube.com/watch?v=z-o1W9ijUhI&list=PLOSLUtJ_J3rrJ1R1qEf8CCEpV3GgbJGNr)
- Layout based on official bootstrap [Jumbotron Example](https://getbootstrap.com/docs/5.0/examples/)

## Alternatives

- https://11straps.com/
- https://github.com/mesinkasir/eleventyblog
- See all starters: https://www.11ty.dev/docs/starter/

## Technical background:

Bootstrap information for npm/sass:

- https://getbootstrap.com/docs/5.0/getting-started/download/#source-files
- https://getbootstrap.com/docs/5.0/customize/sass/

Sustainable Web Design:

- Comment out not needed bootstrap components in `src/scss/app.scss`

## TODOs

- [ ] Add support for Stackblitz (https://stackblitz.com/github/mandrasch/11ty-plain-bootstrap5)
- [ ] Add more demo content with image/gallery examples
- [ ] Add local google fonts example
- [ ] Improve handling of absolute URLs for open graph image information and BASE_URL settings
- [ ] Add sitemap.xml (See https://github.com/maxboeck/eleventastic)
- [ ] Add minimalistisc cache busting via timestamp https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/ or https://laravel.com/docs/9.x/mix#versioning-and-cache-busting (would require to read mix-manifest.json file in build step? 
- [ ] Try https://github.com/11ty/eleventy-plugin-vite with Eleventy v2?
- [ ] Check a11y with WAVE, aXe, etc. or use automated workflow, e.g. pa11y https://rodneylab.com/sveltekit-accessibility-testing
- [ ] Add PWA features

## License

MIT license

_(License is for compatibility purposes with eleventys license only. You don't have to attribute my personal additions, I did mostly boring config stuff. Please be aware that Eleventy, Bootstrap, Bootstrap Icons, Laravel Mix and eleventy plugins used are licensed as MIT license.)_
