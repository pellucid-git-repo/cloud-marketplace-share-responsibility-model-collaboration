

# Adjust MCoE Pillars — Remove Pellucid-Specific Content

## Objective
Make the MCoE section vendor-neutral by removing items that are too closely tied to specific Pellucid product capabilities (Private Marketplace references, specific P2P vendor names).

## Changes in `src/components/McoePillars.tsx`

### Governance pillar (items array)
- **Remove**: "Private Marketplace curation and policies"

### Finance pillar (items array)
- **Change**: "Spend analytics and marketplace ROI reporting" to "Spend analytics and ROI reporting"

### Technology pillar (items array)
- **Change**: "IAM configuration and Private Marketplace setup" to "IAM configuration and access management"
- **Change**: "P2P system integration (Coupa, SAP Ariba, Oracle, NetSuite)" to "ERP integration and procurement tooling"

The last change also aligns with the project's preferred terminology of "ERP integration" over "P2P" references.

## Summary

| Pillar | Before | After |
|--------|--------|-------|
| Governance | 5 items | 4 items (removed Private Marketplace) |
| Finance | unchanged count | Wording tweak (drop "marketplace") |
| Technology | unchanged count | Two wording tweaks (drop Private Marketplace, drop vendor names) |

No structural or component changes needed — only string updates in the pillars data array.

