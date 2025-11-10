import { ConnectButton } from '@mysten/dapp-kit'
import './App.css'
import { WalletStatus } from './components/Status'
// import { OwnedObjects } from './components/OwnedObjects'



function App() {

  return (
    <>
      <ConnectButton />
      <h1>Hello world</h1>
      <WalletStatus />
      {/* <OwnedObjects /> */}
    </>
  )
}

export default App
