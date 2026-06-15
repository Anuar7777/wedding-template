import weddingJson from './configs/wedding.json'
import { enrichInvitationEventConfig, parseInvitationEventConfig } from './load-config'

export type { FadeInMotionProps, InvitationEventConfig, InvitationEventConfigJson } from './types'
export { buildEventMetadata } from './build-metadata'
export { parseInvitationEventConfig, enrichInvitationEventConfig } from './load-config'

export const weddingConfig = enrichInvitationEventConfig(parseInvitationEventConfig(weddingJson))
