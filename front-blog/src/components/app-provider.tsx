import { createContext, PropsWithChildren } from 'react'

import { initialWalletData, useConnectEthereum } from 'src/hooks'

export type AppContextState = ReturnType<typeof useConnectEthereum>

export const AppContext = createContext<AppContextState>({
  walletData: initialWalletData,
  onConnectToWallet: () => {},
  disconnect: () => {},
})

export const AppProvider = ({ children }: PropsWithChildren) => {
  const connectionData = useConnectEthereum()

  return (
    <AppContext.Provider value={connectionData}>{children}</AppContext.Provider>
  )
}
