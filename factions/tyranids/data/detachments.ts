import { detachment } from '@/types';
import { INVASION_FLEET_ENHANCEMENTS } from './enhancements';
import { INVASION_FLEET_STRATAGEMS } from './stratagems';
import { INVASION_FLEET_DETACHMENT_RULES } from './detachment-rules';

export const DETACHMENTS: { [key: string]: detachment } = {
  INVASION_FLEET: {
    name: 'INVASION FLEET',
    enhancements: INVASION_FLEET_ENHANCEMENTS,
    stratagems: INVASION_FLEET_STRATAGEMS,
    detachmentRule: INVASION_FLEET_DETACHMENT_RULES
  }
};
