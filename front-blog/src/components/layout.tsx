import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button, Flex, Layout, Menu, theme } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'

import { routes } from 'src/router/routes'
import { useAppContext } from 'src/hooks'
import { Render } from './render'

const { Header, Content, Footer } = Layout

export const AppLayout = () => {
  const location = useLocation()
  const { walletData, disconnect } = useAppContext()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Header className="top-0 z-10 w-full sticky flex items-center">
        <div className="text-white text-base font-extrabold pr-4">
          {`{ B LOG'S }`}
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          className="flex-1 min-w-0"
          selectedKeys={[location.pathname]}
          items={routes.map(({ path, title }) => ({
            label: <Link to={path}>{title}</Link>,
            key: path,
          }))}
        />
        <Flex>
          <div className="text-yellow-400 font-bold text-2xl hidden md:block me-20">
            Balance: <span className="text-3xl">{walletData.balance}</span>
          </div>

          <Render ifCondition={walletData?.address}>
            <Button
              danger
              type="primary"
              iconPosition="end"
              onClick={disconnect}
              icon={<PoweroffOutlined />}
            >
              Logout
            </Button>
          </Render>
        </Flex>
      </Header>
      <Content className="py-6 px-4 sm:px-[12vw] md:px-[16vw] lg:px-[20vw] xl:px-[24vw] overflow-y-scroll">
        <div
          className="p-6 min-h-[380px]"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
