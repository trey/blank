# Trey's Blank Slate

This is a project to help to start a fresh website using [Grunt.js](http://gruntjs.com/) to do a bunch of stuff.

## Installation

First, make sure you have the latest Node and npm. Go to [nodejs.org](http://nodejs.org/), download and install it.

To get everything setup, just run the setup script.

```bash
$ script/setup
```

To run the project, you can simply run:

```
$ grunt
```

Or, in the style of "[Scripts To Rule Them All](http://githubengineering.com/scripts-to-rule-them-all/)", you can run:

```bash
$ script/server
```

Open [localhost:3000](http://localhost:3000) in your browser to see your new project. To see [BrowserSync](http://www.browsersync.io/)'s UI, open [localhost:3001](http://localhost:3001).

To update your project if the dependencies have been changed, run:

```bash
$ script/update
```

### Next Steps

Delete the existing `.git` folder. This is *your* project now.

```bash
$ rm -rf .git
```

- Edit the `name`, `version`, and `repository` fields in `package.json`.
- Replace the contents of `README.md` with things relevant to your project.
- Setup a new git repository.

```bash
$ git init
$ git add .
$ git commit -m "Starting point based on Trey's Blank Slate."
```

---

Note: `src/index.html` is mostly [HTML5 Boilerplate](http://html5boilerplate.com/) with stuff stripped out. `/css/scss/normalize.scss` is from [normalize.css](http://necolas.github.io/normalize.css/).

The idea for this came from [the little Solutions Log post I wrote](https://gist.github.com/trey/6679792) and the fact that I had to keep referring to it to build little one off prototypes I was working on. Now I can just grab a copy of this and get rocking  immediately.

You should also check out [@elijahmanor's (much, much better thought out) project](https://github.com/elijahmanor/gruntify-fed).
