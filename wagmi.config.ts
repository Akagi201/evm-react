import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20ABI } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
 
export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: goerli.id,
      contracts: [
        {
          name: 'EnsRegistry',
          address: {
            [goerli.id]: '0x31D20C015AFDF3909Bc2E1369909D041d2c323BB',
          },
        },
      ],
    }),
    react(),
  ],
})