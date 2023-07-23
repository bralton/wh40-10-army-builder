import { Detachment } from '@/types';
import { DETACHMENTS as core_detachments } from '../../CORE/data';
import { characters } from './characters';
import { troops } from './units';

const DETACHMENTS: { [key: string]: Detachment } = {
  ...core_detachments
};

for (const detachment of Object.keys(DETACHMENTS)) {
  DETACHMENTS[detachment].units = { ...characters, ...troops };
}

export { DETACHMENTS };
