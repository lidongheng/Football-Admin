/**
 * 判断是否有权限
 * @param roles 当前角色
 * @param route 当前路由对象
 */
function hasPermission (roles: string, route: any) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.some((role:string) => role.indexOf(roles) >= 0)
  } else {
    return true
  }
}
export default hasPermission
