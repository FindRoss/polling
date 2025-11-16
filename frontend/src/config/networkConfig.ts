import { createNetworkConfig } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import {
  TESTNET_POLL_PACKAGE_ID,
  DEVNET_POLL_PACKAGE_ID,
  MAINNET_POLL_PACKAGE_ID
} from "../constants";

const { networkConfig, useNetworkVariable, useNetworkVariables } = createNetworkConfig({
  devnet: {
    url: getFullnodeUrl("devnet"),
    variables: {
      POLL_PACKAGE_ID: DEVNET_POLL_PACKAGE_ID
    }
  },
  testnet: {
    url: getFullnodeUrl("testnet"),
    variables: {
      POLL_PACKAGE_ID: TESTNET_POLL_PACKAGE_ID
    }
  },
  mainnet: {
    url: getFullnodeUrl("mainnet"),
    variables: {
      POLL_PACKAGE_ID: MAINNET_POLL_PACKAGE_ID
    }
  },
});

export { networkConfig, useNetworkVariable, useNetworkVariables }



