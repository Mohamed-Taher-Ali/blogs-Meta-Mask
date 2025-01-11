import { Express, Router } from "express"

import blogRouter from "./blog.router"

const routes = [
    blogRouter
]

export const useRoutes = (app: Express, prefix='') => {
    routes.map(([path, router]) => {
        const fullPath = `${prefix}/${path}`
        app.use(fullPath, router as Router)
    })
}