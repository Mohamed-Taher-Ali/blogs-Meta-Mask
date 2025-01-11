import { BlogType } from 'src/pages/add-blog/types'
import { applyPrefix } from 'src/utils'
import { apiCLient } from './apiClient'

const configureUrl = applyPrefix('/blogs')

export const createBlog = (params: BlogType<{ address: string }>) => {
  return apiCLient.post(configureUrl('/'), params)
}

export const fetchBlogs = (address: string) => {
  console.log(configureUrl(`/${address}`))

  return apiCLient.get(configureUrl(`/${address}`))
}
