'use client';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import { type VariantProps } from 'class-variance-authority';

import { toggleVariants } from '@/components/figma/toggleVariants';
import { cn } from '@/components/figma/utils';

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root data-slot='toggle' className={cn(toggleVariants({ variant, size, className }))} {...props} />
  );
}

export default Toggle;
