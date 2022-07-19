export const getParentRouter = (routers) => {
  return routers.filter((item) => {
    return item.children && item.children.length > 0
  })
}
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
export const getMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...getMenus(item.children))
      return
    }
    let route = result.find((val) => {
      return val.path === item.path
    })
    if (!route) {
      route = {
        ...item,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }
    if (item.children) {
      route.children.push(...getMenus(item.children))
    }
  })

  return result
}
