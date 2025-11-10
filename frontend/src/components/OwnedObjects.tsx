import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit"

export const OwnedObjects = () => {
  const account = useCurrentAccount();
  const { data: response, error, isPending } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner: account!.address
    },
    {
      enabled: !!account
    }
  );


  if (!account) return "Cannot retrieve the account";
  if (error) return error.message;
  if (isPending || !response) return <div>Loading...</div>;

  return (
    <>
      {response.data.length === 0 ? (
        <p>No objects owned by connected wallet</p>
      ) : (
        <h2>Objects owned by wallet</h2>
      )
      }
      <>
        {/* {response.data.map(objectRes => (
          <div key={objectRes.data?.objectId}>
            <p>Object ID: {objectRes.data?.objectId}</p>
          </div>
        ))} */}
      </>
    </>
  )
}