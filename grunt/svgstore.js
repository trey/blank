module.exports = {
  options: {
    prefix: 'shape-',
    svg: {
      style: 'display: none;'
    },
    includedemo: true
  },
  default: {
    files: {
      'static/img/sprites.svg': ['static/img/svg/**/*.svg']
    }
  }
};
