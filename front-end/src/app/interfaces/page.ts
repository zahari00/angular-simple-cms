import { Block } from './block'

export interface Page {
    id: number
    slug: string
    title: string
    blocks_order: string|number[]
    created_at: string
    updated_at: string
    blocks: Block[]
}