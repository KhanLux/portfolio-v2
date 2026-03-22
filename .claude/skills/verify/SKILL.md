---
name: verify
description: Run TypeScript type-check + Vite production build to validate the codebase. Use after making changes to confirm nothing is broken before handing off.
---

Run the following command and report the result:

```bash
npm run build
```

This runs `tsc -b` (TypeScript type-check across all tsconfig project references) followed by `vite build` (production bundle).

Note: `npm run lint` is in package.json but `eslint` is not installed — skip it.

If the build fails:
- Show the full error output
- Identify the root cause
- Fix it before marking the task done
