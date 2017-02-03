import 'es6-promise/auto' //增加垫片
import { app, store } from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')


// service worker先不搞了
// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//   //先注释起来
// }
