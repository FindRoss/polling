import { useCurrentAccount } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { useNetworkVariable } from '../config/networkConfig';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';

const CreatePoll = () => {
  const account = useCurrentAccount();
  const PACKAGE_ID = useNetworkVariable("POLL_PACKAGE_ID");
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();


  console.log('account', account);

  const handleClick = () => {
    if (!account) {
      alert('Please connect your wallet first.');
      return;
    }

    const tx = new Transaction();
    console.log('tx', tx);

    tx.moveCall({
      arguments: [
        tx.pure.string("For The People #1"),
      ],
      target: `${PACKAGE_ID}::poll::create_poll`,
    })

    signAndExecuteTransaction(
      { transaction: tx },
      { onSuccess: (result) => console.log('executed transaction', result) }
    );

    // Here you would build and send the transaction to create a poll
    alert('Create Poll button clicked. Transaction logic to be implemented.');
  };

  return (
    <div className="flex flex-wrap flex-col items-center justify-center p-4">
      <button
        onClick={handleClick}
        className="*
          inline-flex 
          items-center 
          justify-center
          px-8 py-4
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          shadow-md shadow-blue-900/30
          hover:bg-blue-500
          hover:shadow-blue-400/30
          active:scale-95
          transition-all
          cursor-pointer
        ">Create Poll +
      </button>
    </div>
  );
};

export default CreatePoll;
