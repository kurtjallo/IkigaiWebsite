import type { Metadata } from 'next'
import { ModelDiagram } from '@/components/sections/model-diagram'
import { ModelFlow } from '@/components/sections/model-flow'

export const metadata: Metadata = {
  title: 'The Ikigai Architecture Model',
  description:
    'Our proprietary framework for building resilient, purpose-driven organizations. Seven pillars, four phases: Blueprint, Build, Strengthen, Sustain.',
}

export default function ModelPage() {
  return (
    <>
      <ModelDiagram />
      <ModelFlow />
    </>
  )
}
