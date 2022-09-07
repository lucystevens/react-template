import { ReactNode } from "react"
import { Location } from 'history';

export type AuthHandler = (location: Location) => boolean

export interface Routing {
    path: string
    component?: ReactNode,
    subRoutes: Routing[],
    protectedBy?: AuthHandler
}

export interface RouteParams {
    protectedBy?: AuthHandler,
    component?: ReactNode,
    routes?: Routing[]
}

export interface FlatRoute {
    path: string
    component: ReactNode,
    protectedBy: AuthHandler
}

export const path = (path: string, params: RouteParams): Routing => {
    return {
        path: path,
        component: params.component,
        subRoutes: params.routes ?? [],
        protectedBy: params.protectedBy
    }
}

export const flattenRoute = (route: Routing): FlatRoute[] => {
    return flattenSubroute(route, route.path)
}

export const flattenSubroute = (route: Routing, path: string, protectedBy?: AuthHandler): FlatRoute[] => {
    let routes: FlatRoute[] = []
    let currentPath = path.replaceAll("//", "/")
    let currentAuthHandler = route.protectedBy ?? protectedBy 
    if(route.component){
        routes.push({
            path: currentPath,
            component: route.component,
            protectedBy: currentAuthHandler  ?? (_ => true)
        })
    }
    route.subRoutes.forEach((sr) => {
      routes = routes.concat(flattenSubroute(sr, currentPath + "/" + sr.path, currentAuthHandler))
    })
    return routes.reverse()
}