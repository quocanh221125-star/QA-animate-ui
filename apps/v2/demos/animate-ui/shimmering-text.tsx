"use client"

import { ShimmeringText } from "qa-animate-ui/primitives/texts/shimmering"

export const controls = {
  ShimmeringText: {
    wave: { value: false },
    duration: { value: 1, min: 0.1, max: 3, step: 0.1 },
  },
}

export default function ShimmeringTextDemo({
  wave = false,
  duration = 1,
}: {
  wave?: boolean
  duration?: number
}) {
  return (
    <ShimmeringText
      key={`${wave}-${duration}`}
      className="text-4xl font-semibold"
      text="Shimmering Text"
      wave={wave}
      duration={duration}
    />
  )
}
