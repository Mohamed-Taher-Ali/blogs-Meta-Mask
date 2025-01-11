import { Flex, Spin } from 'antd'

export const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <Flex vertical gap={4}>
      <Spin size="large" />
      <span>Loading</span>
    </Flex>
  </div>
)
