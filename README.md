# Workflow transitive dependency bug reproduction

Minimal reproduction for a bug in the `workflow` esbuild bundler where **transitive dependencies** of workflow/step files are externalized instead of bundled, causing `Cannot find module` errors at runtime in dev mode.

## The bug

When a workflow file imports a local `.ts` module that itself imports another local `.ts` module (a transitive dependency), the bundler correctly bundles the direct import but externalizes the transitive one. At runtime, Node ESM fails to resolve the extensionless `.ts` import.

```
my-workflow.ts → shared/constants.ts → shared/helpers.ts
                 ✅ bundled              ❌ externalized
```

## Setup

```bash
pnpm install
pnpm dev
```

## Expected

The dev server starts without errors. The step bundle inlines both `constants.ts` and `helpers.ts`.

## Actual

```
Error: Cannot find module '/path/to/shared/helpers' imported from /path/to/shared/constants.ts
```

The generated `.nuxt/workflow/steps.mjs` contains:

```js
import { CATEGORIES } from "../../shared/constants.ts";
```

instead of inlining the module and its transitive dependency.
