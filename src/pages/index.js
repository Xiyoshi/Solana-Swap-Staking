import { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

export default function Swap() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    } else {
      alert("Solana wallet not found. Please install Phantom.");
    }
  };

  return (
    <div>
      <h1>Solana Swap</h1>
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      <p>Swap feature coming soon...</p>
    </div>
  );
}
