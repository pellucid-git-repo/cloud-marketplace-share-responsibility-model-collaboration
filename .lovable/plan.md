

# Add Pellucid Attribution and Donate Button

## 1. Footer Attribution
Add a line to the existing footer in `src/pages/Index.tsx` stating:
> "marketplace-responsibility.org is maintained by Pellucid Network, Inc. Visit [Pellucid Network](https://pellucidnetwork.com) to learn more."

This goes after the existing CC BY 4.0 license line.

## 2. Donate Button
Add a "Donate" button to the top-right of the hero/header area in `src/pages/Index.tsx`. It will be styled as an outline button with a Heart icon, positioned fixed or absolute in the top-right corner of the header. For now it will link to `#donate` as a placeholder (or we can discuss a real URL).

## Technical Details

**File: `src/pages/Index.tsx`**

- Import the `Heart` icon from lucide-react
- Add a sticky/fixed top nav bar with the Donate button (top-right), or place it absolutely in the header section
- Add the Pellucid attribution paragraph to the footer between the license line and the closing `</footer>` tag

