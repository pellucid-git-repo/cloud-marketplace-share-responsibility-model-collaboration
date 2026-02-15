
# Remove the Coordination Gap Section

## Change
Remove the `<CoordinationGap />` component from the page and clean up its import. This removes the "Current State vs. Target State" timeline comparison (the manual 40-day procurement timeline and the automated outcomes cards).

## Files to Modify

1. **`src/pages/Index.tsx`**
   - Remove the `import CoordinationGap` line
   - Remove the `<CoordinationGap />` render call (line 155)

2. **`src/components/CoordinationGap.tsx`**
   - Delete this file entirely, as it will no longer be used

The page order will become: Hero -> Why This Model Exists -> Responsibility Matrix -> MCoE Pillars -> Team Accountability Grid -> How to Contribute -> Footer.
