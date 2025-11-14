import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { useState } from 'react';

// DONE: replace this with the package ID from your "sui client publish" output
// const PACKAGE_ID = '0x91ddbc82d05c5ac86c4255c76c8a1355c6ca8817bc9fcf2af6350ad5a0c02e63';
const PACKAGE_ID = '0xaef03190f20215aa0faf5aa641ac852db5f1d98be8eac8e6389e8177fb62a6b2';


// TODO: replace `poll` and `create_poll` with your actual module + function names
const TARGET = `${PACKAGE_ID}::poll::ping`;

const PollButton = () => {
  const account = useCurrentAccount();
  const { mutate: signAndExecuteTransaction, isPending } = useSignAndExecuteTransaction();
  const [digest, setDigest] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    if (!account) {
      setError('Please connect your wallet first.');
      return;
    }

    setError(null);
    setDigest(null);

    // 1. Build the transaction
    const tx = new Transaction();

    // Example: call an entry function that takes a string question
    //   public entry fun create_poll(question: vector<u8>, ctx: &mut TxContext)
    tx.moveCall({
      target: TARGET,
      arguments: [],
    });

    // 2. Ask the wallet to sign + execute it on testnet
    signAndExecuteTransaction(
      {
        transaction: tx,
        // chain: 'sui:testnet', // optional; will use the default network from SuiClientProvider
      },
      {
        onSuccess: (result) => {
          console.log('Transaction result', result);
          setDigest(result.digest);
        },
        onError: (e) => {
          console.error(e);
          setError((e as Error).message);
        },
      },
    );
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        disabled={!account || isPending}
        className="px-8 py-4 rounded bg-blue-600 disabled:bg-slate-700 hover:bg-blue-800 transition cursor-pointer"
      >
        {isPending ? 'Sending...' : 'Create Poll on Sui'}
      </button>

      {!account && (
        <p className="text-sm text-slate-400">
          Connect your wallet with the button in the navbar first.
        </p>
      )}

      {digest && (
        <p className="text-sm text-emerald-400">
          ✅ Tx sent! Digest: <span className="font-mono break-all">{digest}</span>
        </p>
      )}

      {error && (
        <p className="text-sm text-red-400">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
};

export default PollButton;
