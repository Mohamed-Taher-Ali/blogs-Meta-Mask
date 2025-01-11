import { Alert, Flex, message } from 'antd'
import { useEffect, useState } from 'react'

import { useAppContext } from 'src/hooks'
import { fetchBlogs } from 'src/services'
import { BlogType } from '../add-blog/types'
import { EmptyData } from 'src/components'

const HomePage = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([])

  const {
    walletData: { address },
  } = useAppContext()

  useEffect(() => {
    fetchBlogs(address)
      .then(({ data }) => {
        setBlogs(data.blogs)
      })
      .catch((err) => message.error(err.message))
  }, [])

  return (
    <Flex vertical gap={24} className="h-full">
      {!blogs.length ? (
        <EmptyData />
      ) : (
        blogs.map(({ title, content }, ind) => (
          <Alert
            key={ind}
            type="success"
            className="hover:bg-orange-100 transition duration-300 ease-in-out"
            message={<p className="text-xl font-bold text-gray-800">{title}</p>}
            description={
              <div className="text-lg md:text-xl text-gray-600">
                <p>{content}</p>
                <p className="text-end text-xs font-extralight mt-2 opacity-[0.7]">
                  created 12/11/2025
                </p>
              </div>
            }
          />
        ))
      )}
    </Flex>
  )
}

export default HomePage
