import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit"

const OwnedObjects = () => {
  const account = useCurrentAccount();
  console.log('account', account);

  const { data: response, isError, isPending, } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner: account!?.address
    },
    {
      enabled: !!account
    }
  );

  if (isPending) return <span className="text-2xl">Loading</span>

  if (isError) return console.error("Error: ")

  if (response) console.log('res: ', response)

  return (
    <div className="">
      {response?.data?.map((obj) => (
        <pre key={obj.data?.objectId} className="bg-slate-900 p-3 text-sm mt-4">
          {JSON.stringify(obj, null, 2)}
        </pre>
      ))}
    </div>
  )
}

export default OwnedObjects;