import { Flex, Form, Input } from 'antd'

import { useAppContext } from 'src/hooks'

const AccountPage = () => {
  const { walletData } = useAppContext()

  return (
    <Flex vertical className="h-[300px] w-[60%] m-auto justify-center">
      <Form initialValues={walletData} autoComplete="off">
        <Form.Item label="Balance" name="balance">
          <Input
            readOnly
            className="font-md text-md text-orange-700 text-xl border-none focus:ring-0"
          />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input.Password readOnly />
        </Form.Item>
      </Form>
    </Flex>
  )
}

export default AccountPage
