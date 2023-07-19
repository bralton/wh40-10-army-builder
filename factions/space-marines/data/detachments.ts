import { Detachment } from '@/types';
import { GLADIUS_TASK_FORCE_ENHANCEMENTS } from './enhancements';
import { GLADIUS_TASK_FORCE_STRATAGEMS } from './stratagems';
import { GLADIUS_TASK_FORCE_DETACHMENT_RULES } from './detachment-rules';
import { characters } from './characters';
import { troops } from './units';

export const DETACHMENTS: { [key: string]: Detachment } = {
  GLADIUS_TASK_FORCE: {
    name: 'GLADIUS TASK FORCE',
    enhancements: GLADIUS_TASK_FORCE_ENHANCEMENTS,
    stratagems: GLADIUS_TASK_FORCE_STRATAGEMS,
    detachmentRule: GLADIUS_TASK_FORCE_DETACHMENT_RULES,
    units: { ...characters, ...troops }
  },
  OTHER_DETACHMENT: {
    name: 'OTHER DETACHMENT',
    enhancements: GLADIUS_TASK_FORCE_ENHANCEMENTS,
    stratagems: GLADIUS_TASK_FORCE_STRATAGEMS,
    detachmentRule: GLADIUS_TASK_FORCE_DETACHMENT_RULES,
    units: { ...characters, ...troops }
  }
};
