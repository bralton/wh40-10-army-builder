import { Detachment } from '@/types';
import { DETACHMENTS as core_detachments } from '../../CORE/data';
import { characters } from './characters';
import { troops } from './units';
import { cloneDeep } from 'lodash';
import { UNFORGIVEN_TASK_FORCE } from './detachment-rules';
import { UNFORGIVEN_TASK_FORCE_ENHANCEMENTS } from './enhancements';
import { UNFORGIVEN_TASK_FORCE_STRATAGEMS } from './stratagems';

const DETACHMENTS: { [key: string]: Detachment } = cloneDeep(core_detachments);

for (const detachment of Object.keys(DETACHMENTS)) {
  DETACHMENTS[detachment].units = { ...characters, ...troops };
}

DETACHMENTS.UNFORGIVEN_TASK_FORCE = {
  name: 'UNFORGIVEN TASK FORCE',
  enhancements: UNFORGIVEN_TASK_FORCE_ENHANCEMENTS,
  stratagems: UNFORGIVEN_TASK_FORCE_STRATAGEMS,
  detachmentRule: UNFORGIVEN_TASK_FORCE,
  units: { ...characters, ...troops }
};

export { DETACHMENTS };
