import { useCurrentAccount } from "@mysten/dapp-kit"

export const WalletStatus = () => {
  const account = useCurrentAccount();

  return (
    <>
      <h2>Wallet status</h2>
      {
        account ? (
          <>
            <p>Wallet connected</p>
            <p>Address: {account.address}</p>
            <p>Chains: {account.chains}</p>
            <p>publicKey: {account.publicKey}</p>
          </>
        ) : (
          <>
            <p>Wallet not connected</p>
          </>
        )
      }
    </>
  )
}