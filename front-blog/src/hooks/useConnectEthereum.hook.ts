import { useCallback, useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { Nullable } from 'src/types'
import { message } from 'antd'

export type WalletDataType = {
  balance: Nullable<string>
  address: string
}

type EthereumRequestParams = { method: string; params?: string[] }

type EthereumType = {
  request: (params: EthereumRequestParams) => Promise<[string] | string>
}

const globalEthereum: EthereumType = window['ethereum' as any] as any

export const initialWalletData = {
  balance: null,
  address: '',
}

export const useConnectEthereum = () => {
  const [walletData, setWalletData] =
    useState<WalletDataType>(initialWalletData)

    useEffect(() => {
        try {
          const storedWallet: WalletDataType = 
            JSON.parse(localStorage.getItem('wallet') || '{}')
          if(storedWallet.address && storedWallet.balance)setWalletData(storedWallet)
        } catch (error) {}
    }, [])

  const onConnectToWallet = useCallback(() => {
    if (globalEthereum) {
      globalEthereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => {
          const address = res[0]
          getBalance(address)
        })
        .catch((err) => err.message && message.error(err.message))
    } else message.warning('install metamask extension!!')
  }, [])

  const disconnect = useCallback(() => {
    localStorage.removeItem('wallet')
    setWalletData(initialWalletData)
  }, [])

  const getBalance = useCallback((address: string) => {
    globalEthereum
      .request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      })
      .then((balance) => {
        const wallet = {
          balance: ethers.utils.formatEther(balance as string),
          address,
        }

        localStorage.setItem('wallet', JSON.stringify(wallet))
        setWalletData(wallet)
      })
      .catch((_err: any) => {
        setWalletData((prev) => ({
          ...prev,
          address,
        }))
      })
  }, [])

  return {
    walletData,
    disconnect,
    onConnectToWallet,
  }
}
