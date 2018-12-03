const pkg = require('~/package')

export const state = () => ({
  pathName: null
})

export const mutations = {
  set(state, text) {
    state.pathName = text
  }
}
export const getters = {
  currentPath(state) {
    return state.pathName || 'e德互联手机客服 - ' + pkg.name
  }
}
