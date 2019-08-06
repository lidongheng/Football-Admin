import { ActionTree } from 'vuex'
import jwt_decode from 'jwt-decode'
import { asyncRouterMap } from '../router'
import hasPermission from '../utils/hasPermission'

const actions: ActionTree<any, any> = {
  async setUser ({ state, commit }, user: any) {
    const decoded: any = jwt_decode(user)
    commit('SET_USER', decoded)
    const { key } = decoded
    console.log(key)
    let accessedRouters = filterAsyncRouter(asyncRouterMap, key)
    commit('SET_ROUTERS', accessedRouters)
  }
}

export default actions

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap 所有路由表
 * @param roles 当前角色
 */

function filterAsyncRouter (asyncRouterMap:Array<any>, roles: any) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}
