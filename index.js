/* index.js */
import MainView from './views/main-view.js'
import store from './store/store.js'

const choo = Choo({ hash: true })
choo.use(store)
choo.route('/fish-chomp', MainView)
choo.mount('#app')
window.choo = choo




