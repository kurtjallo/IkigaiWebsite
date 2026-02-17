import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/data/metadata'
import { ModelDiagram } from '@/components/sections/model-diagram'
import { ModelFlow } from '@/components/sections/model-flow'

export const metadata: Metadata = pageMetadata.model

export default function ModelPage() {
  return (
    <>
      <ModelDiagram />
      <ModelFlow />
    </>
  )
}
