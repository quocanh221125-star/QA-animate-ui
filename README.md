<div align="center">
  <h1>QA-animate-ui</h1>
  <p align="center">
    Animated drop-in primitives for Radix UI, Base UI and React Aria, built with Motion. Swap the import, keep your shadcn/ui components.
  </p>
</div>

## Getting started

Animate every installed shadcn/ui component in one command:

```bash
npx qa-animate-ui-cli@latest animate all
```

Or swap a primitive's import yourself:

```tsx
// Before
import { Accordion as AccordionPrimitive } from 'radix-ui';
// After
import { Accordion as AccordionPrimitive } from 'qa-animate-ui/primitives/radix-ui';
```

## Workspace Structure

- **`packages/react`** (`qa-animate-ui`): Core animated React primitives, components, effects, buttons, and animated icons (Radix UI, Base UI, React Aria + Motion).
- **`packages/cli`** (`qa-animate-ui-cli`): Automated CLI & codemod tool to swap standard shadcn/ui primitives for `qa-animate-ui` animated primitives.
- **`apps/v2`**: Interactive Next.js Documentation, Component Showcase, and Shadcn Registry.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build all packages and registry
pnpm build
```

## License

Licensed under the [MIT License](./LICENSE.md).
