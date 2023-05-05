import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

import { Account, SendTransaction } from '../components'

function Page() {
  const { isConnected } = useAccount()
  return (
    <>
      <h1>EVM React Dapp</h1>

      <ConnectButton />
      {isConnected && <Account />}
      
      <SendTransaction />
    </>
  )
}

export default Page
