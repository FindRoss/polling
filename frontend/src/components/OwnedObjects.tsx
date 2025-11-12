import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit"

export const OwnedObjects = () => {
  const account = useCurrentAccount();
  const { data: response, isPending, } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner: account!.address
    },
    {
      enabled: !!account
    }
  );

  if (isPending) return <span className="text-2xl">Loading</span>

  // if (isError) return console.error("Error: ", error.message)

  if (response) console.log('res ', response)

  return (
    <>
      <h2>Hello world</h2>
    </>
  )
}