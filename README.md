# Trey's Blank Slate

This is a project to help to start a fresh website using [Grunt.js](http://gruntjs.com/) to do a bunch of stuff. You can start customizing `/static/css/scss/main.scss` and it will automatically compile things to `/static/css/main.css`. If you have the [LiveReload](http://livereload.com/) [browser extension](http://go.livereload.com/extensions), it'll even refresh your browser as you edit code.

## Installation

First, make sure you have the lastest Node and npm. Go to [nodejs.org](http://nodejs.org/), download and install its package even if you have it already.

To get the actual Grunt command set up:

```bash
$ npm install -g grunt-cli
```

To get the blank slate up and running:

```bash
$ npm install
```

If you don't already have [the `scss-lint` Ruby gem](https://github.com/causes/scss-lint) installed, you'll need to do that:

```bash
$ gem update --system
$ gem install scss-lint
```

And finally, to start up the project:

```bash
$ grunt
```

### Next Steps

- Delete the existing `.git` folder if it's there. This is *your* project now.
    - `$ rm -rf .git`
- Edit the `name`, `version`, and `repository` fields in `package.json`.
- Replace the contents of `README.md` with things relevant to your project.
- Git-ify your sparkly new project as usual (`git init` and all that).

---

Note: `index.html` is mostly [HTML5 Boilerplate](http://html5boilerplate.com/) with stuff stripped out. `/css/scss/normalize.scss` is from [normalize.css](http://necolas.github.io/normalize.css/).

The idea for this came from [the little Solutions Log post I wrote](https://gist.github.com/trey/6679792) and the fact that I had to keep referring to it to build little one off prototypes I was working on. Now I can just grab a copy of this and get rocking  immediately.

You should also check out [@elijahmanor's (much, much better thought out) project](https://github.com/elijahmanor/gruntify-fed).
