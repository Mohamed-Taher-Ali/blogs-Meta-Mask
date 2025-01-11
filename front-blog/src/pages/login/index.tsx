import { Button, Flex } from 'antd'

import { useAppContext } from 'src/hooks'

const LoginPage = () => {
  const { onConnectToWallet } = useAppContext()

  return (
    <Flex
      vertical
      className="h-full justify-start items-center bg-gray-300 gap-40 pt-48"
    >
      <p className="text-6xl sm:text-8xl">
        {`{ `}
        <span className="text-8xl sm:text-10xl me-4 sm:me-12 text-blue-700">
          B
        </span>
        {`LOG'S }`}
      </p>
      <Button onClick={onConnectToWallet} type="primary" size="large">
        Login by wallet
      </Button>
    </Flex>
  )
}

export default LoginPage
