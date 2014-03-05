# Grunt Blank Slate

This is a starter project to get you going with a fresh installation of [Grunt.js](http://gruntjs.com/). You can start customizing `/css/scss/main.scss` and it will automatically compile things to `/css/main.css`. Hell, if you have the [LiveReload](http://livereload.com/) [browser extension](http://go.livereload.com/extensions), it'll even refresh your browser as you edit code.

## Installation

First, make sure you have the lastest Node and npm. Go to [nodejs.org](http://nodejs.org/), download and install its package even if you have it already. Trust me, you'll just save yourself the headache and googling.

To get the actual Grunt command set up:

```bash
$ npm install -g grunt-cli
```

Now, to get the blank slate up and running:

```bash
$ rake install
```

And finally, to start up the project:

```bash
$ grunt
```

And you should be off to the races, as they say.

Note: `index.html` is mostly [HTML5 Boilerplate](http://html5boilerplate.com/) with stuff stripped out. `/css/scss/normalize.scss` is from [normalize.css](http://necolas.github.io/normalize.css/).

The idea for this came from [the little Solutions Log post I wrote](https://gist.github.com/trey/6679792) and the fact that I had to keep referring to it to build little one off prototypes I was working on. Now I can just grab a copy of this and get rocking  immediately.

P.S. You'll probably want to edit the `name` and `version` fields in `packages.json` eventually.
