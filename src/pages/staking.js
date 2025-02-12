import { useState } from "react";

export default function Staking() {
  const [stakedAmount, setStakedAmount] = useState(0);

  const stakeTokens = () => {
    setStakedAmount(stakedAmount + 10); // Simulasi staking
  };

  return (
    <div>
      <h1>Staking</h1>
      <p>Staked Amount: {stakedAmount} Tokens</p>
      <button onClick={stakeTokens}>Stake 10 Tokens</button>
    </div>
  );
}
