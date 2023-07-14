import { Detachment } from '@/types';
import { INVASION_FLEET_ENHANCEMENTS } from './enhancements';
import { INVASION_FLEET_STRATAGEMS } from './stratagems';
import { INVASION_FLEET_DETACHMENT_RULES } from './detachment-rules';
import { characters } from './characters';
import { troops } from './units';

export const DETACHMENTS: { [key: string]: Detachment } = {
  INVASION_FLEET: {
    name: 'INVASION FLEET',
    enhancements: INVASION_FLEET_ENHANCEMENTS,
    stratagems: INVASION_FLEET_STRATAGEMS,
    detachmentRule: INVASION_FLEET_DETACHMENT_RULES,
    units: { ...characters, ...troops }
  }
};
