import { useContext } from 'react'

import { AppContext } from 'src/components'

export const useAppContext = () => {
  return useContext(AppContext)
}
