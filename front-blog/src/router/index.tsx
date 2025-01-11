import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom'
import { Fragment } from 'react'

import { routes, LoginPage } from './routes'
import { AppLayout } from 'src/components'
import { useAppContext } from 'src/hooks'

export const AppRouter = () => {
  const {
    walletData: { address },
  } = useAppContext()

  return (
    <Router>
      <Routes>
        {address ? (
          <Fragment>
            <Route path="*" element={<Navigate to={'/'} />} />
            <Route path="/" element={<AppLayout />}>
              {routes.map(({ Component, ...restProps }) => (
                <Route
                  {...restProps}
                  key={restProps.path}
                  element={<Component />}
                />
              ))}
            </Route>
          </Fragment>
        ) : (
          <Fragment>
            <Route path="*" element={<Navigate to={'/login'} />} />
            <Route path="/login" index element={<LoginPage />} />
          </Fragment>
        )}
      </Routes>
    </Router>
  )
}
