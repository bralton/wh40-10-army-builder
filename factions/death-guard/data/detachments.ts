import { Detachment } from '@/types';
import { PLAGUE_COMPANY_ENHANCEMENTS } from './enhancements';
import { PLAGUE_COMPANY_STRATAGEMS } from './stratagems';
import { PLAGUE_COMPANY_DETACHMENT_RULES } from './detachment-rules';
import { characters } from './characters';
import { troops } from './units';

export const DETACHMENTS: { [key: string]: Detachment } = {
  PLAGUE_COMPANY: {
    name: 'PLAGUE COMPANY',
    enhancements: PLAGUE_COMPANY_ENHANCEMENTS,
    stratagems: PLAGUE_COMPANY_STRATAGEMS,
    detachmentRule: PLAGUE_COMPANY_DETACHMENT_RULES,
    units: { ...characters, ...troops }
  }
};
