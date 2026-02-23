

# Update Three-Party Responsibility Matrix Text

Three edits to `src/data/data/responsibilities.json`:

## 1. Remove "Customer approval workflows" from Cloud Provider's "Does Not Own"

Remove line 23 (`"Customer approval workflows[cite: 93, 326]."`) from the `cloudProvider.doesNotOwn` array. The remaining four items stay as-is.

## 2. Remove "9+ teams" from Cross-Functional Alignment

Change the Customer responsibility on line 52 from:
```
"Cross-Functional Alignment: Process definition across 9+ teams [cite: 106, 353-354]."
```
to:
```
"Cross-Functional Alignment: Process definition across teams [cite: 106, 353-354]."
```

## 3. Consolidate Vendor "Does Not Own" items

Replace the four customer-facing items (procurement processes, security review timelines, approval workflows, ERP/P2P integration) with a single entry: `"Customer review processes"`. Keep `"CSP platform infrastructure"` and add `"CSP billing infrastructure"` as a separate item.

Result:
```json
"doesNotOwn": [
  "Customer review processes[cite: 100, 344].",
  "CSP platform infrastructure[cite: 348].",
  "CSP billing infrastructure[cite: 348]."
]
```

## File Modified
- `src/data/data/responsibilities.json` (all three changes)

