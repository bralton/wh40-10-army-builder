import { Detachment } from '@/types';
import { DETACHMENTS as core_detachments } from '../../CORE/data';
import { characters } from './characters';
import { troops } from './units';
import { cloneDeep } from 'lodash';

const DETACHMENTS: { [key: string]: Detachment } = cloneDeep(core_detachments);

for (const detachment of Object.keys(DETACHMENTS)) {
  DETACHMENTS[detachment].units = { ...characters, ...troops };
}

export { DETACHMENTS };
