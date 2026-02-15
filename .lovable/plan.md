# Add New Responsibilities to JSON Data

## Changes

### 1. Vendor — New responsibility: "GTM & Channel Approach"

Add a new entry to the vendor responsibilities array:

```
"GTM & Channel Approach: Selection and use of VARs/Distributors [cite: 97]."
```

### 2. Cloud Provider — Update "Transaction Infrastructure"

Change the existing entry from:

```
"Transaction Infrastructure: Process payments and billing aggregation [cite: 88, 310-311]."
```

to:

```
"Transaction Infrastructure: Process payments, billing aggregation, and multi-party deal technology (e.g. CPPO, DSOR) [cite: 88, 310-311]."
```

## Technical Detail

Both changes are in `src/data/data/responsibilities.json`. A new icon mapping for "GTM & Channel Approach" will be added to the `iconMap` in `src/pages/Index.tsx` (using the `Users` or `Megaphone` icon from lucide-react — likely `BarChart3` or `Target` to represent go-to-market strategy).

## Files to Modify

1. `**src/data/data/responsibilities.json**` — Add vendor responsibility, update cloud provider responsibility text
2. `**src/pages/Index.tsx**` — Add icon mapping for "GTM & Channel Approach"