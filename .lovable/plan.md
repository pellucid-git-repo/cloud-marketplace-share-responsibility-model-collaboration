
# Add AWS Shared Responsibility Model Link

## Change
Add a hyperlink to the [AWS Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) in the "Why This Model Exists" section, where the text already references "Traditional shared responsibility models like AWS's."

This is a natural spot -- the phrase "AWS's" will become a clickable link, giving readers immediate context on the infrastructure-layer model this framework builds upon.

## File to Modify

**`src/pages/Index.tsx`** (line 119)

Change the text "Traditional shared responsibility models like AWS's" so that "AWS's" becomes a link:

```
Traditional shared responsibility models like <a href="https://aws.amazon.com/compliance/shared-responsibility-model/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AWS's</a> cover infrastructure layers...
```

No new components or files needed -- just a single inline anchor tag.
