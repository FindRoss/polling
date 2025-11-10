# Polling Project

### Latest Published Package

**Package ID:**  
`0x589a476d7d4bfe2e0bd40c5a4e1506cd8e273208b168586106a2543cfd9a2fe0`

**Module:**  
`poll`

**Example call:**
```bash
sui client call \
  --package 0x589a476d7d4bfe2e0bd40c5a4e1506cd8e273208b168586106a2543cfd9a2fe0 \
  --module poll \
  --function create \
  --args '"Test poll"' '"Just testing"' 123456789 \
  --gas-budget 100000000
