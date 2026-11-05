'use client';

import { AnimateUIProvider } from 'qa-animate-ui/provider';
import { Accordion } from 'qa-animate-ui/primitives/radix-ui/accordion';

function Panel({ label }: { label: string }) {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item">
        <Accordion.Header>
          <Accordion.Trigger>{label}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          <div style={{ height: 200 }}>{label} content</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default function ProviderTempoFixture() {
  return (
    <div className="flex gap-10">
      <Panel label="Default" />
      <AnimateUIProvider tempo={2}>
        <Panel label="Slow" />
      </AnimateUIProvider>
    </div>
  );
}
