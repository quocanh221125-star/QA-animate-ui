# qa-animate-ui

Animated drop-in primitives for Radix UI, Base UI and React Aria, built with [Motion](https://motion.dev).

Each primitive has exactly the API of its library: swap the import and your components animate.

```tsx
// Before
import { Accordion as AccordionPrimitive } from 'radix-ui';
// After
import { Accordion as AccordionPrimitive } from 'qa-animate-ui/primitives/radix-ui';
```

Imports mirror the library's: `radix-ui` → `qa-animate-ui/primitives/radix-ui`, `@radix-ui/react-accordion` → `qa-animate-ui/primitives/radix-ui/accordion`, `@base-ui/react[/accordion]` → `qa-animate-ui/primitives/base-ui[/accordion]`, `react-aria-components` → `qa-animate-ui/primitives/react-aria`.

Or let the CLI do it for every installed shadcn/ui component:

```bash
pnpm dlx qa-animate-ui-cli@latest animate all
```

Documentation: https://animate-ui.com
