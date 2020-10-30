// vue.config.js for less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'menu-inline-toplevel-item-height': '50px',
            'menu-item-height': '50px',
            'layout-footer-background': '#ff1a1a'
          },
          javascriptEnabled: true
        }
      }
    }
  }
};
