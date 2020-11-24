import Vue from 'vue'
import Vuex from 'vuex'
import carList from './carList.js'
import thingsList from './thingsList'
import people from './people'
import searchHistory from './searchHistory'
import classes from './class'
import order from './order'
import address from './address'
import collection from './collection'
import show from './show'
import other from './other'
Vue.use(Vuex)


export default new Vuex.Store({
  namespaced:true,
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    carList,
    people,
    searchHistory,
    classes,
    order,
    thingsList,
    address,
    collection,
    show,
    other,
  }
})
