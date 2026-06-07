User opens index.html
        │
        ▼
┌─────────────────────────┐
│  Load UI + libraries    │
└─────────────────────────┘
        │
        ▼
User clicks "Connect Wallet"
        │
        ▼
Web3Modal → Select wallet (MetaMask etc.)
        │
        ▼
ethers provider reads on‑chain:
   - token symbol, decimals
   - user's EFC balance
        │
        ▼
Display balance + USD value (mock)
        │
        ▼
User can register username → saved to localStorage
        │
        ▼
User can add transaction notes → saved to localStorage (per wallet)
        │
        ▼
User can click "Buy/Sell" → opens Uniswap
        │
        ▼
User can "Add to wallet" → MetaMask adds token
